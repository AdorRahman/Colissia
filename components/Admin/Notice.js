import LoadingScreen from "@components/LoadingScreen";
import SelectInput from "@components/UI/SelectInput";
import TextInput from "@components/UI/TextInput";
import Toggle from "@components/UI/Toggle";
import { GlobalContext } from "@lib/globalContext";
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@lib/firebase";

const Colors = [
  {
    name: "Red",
    value: "#FD0101",
  },
  {
    name: "Green",
    value: "#087857",
  },
  {
    name: "Blue",
    value: "#2895D9",
  },
];
const NoticeBar = () => {
  const { getNotice, noticeDataIsLoading } = useContext(GlobalContext);
  const [message, setMessage] = useState(null);
  const [selectedBgColor, setSelectedBgColor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabling, setIsEnabling] = useState(false);

  const toggleNotice = async () => {
    setIsEnabling(true);
    try {
      const noticeRef = doc(db, "settings/notice");
      const noticeSnaps = await getDoc(noticeRef);
      if (noticeSnaps.exists()) {
        await updateDoc(noticeRef, {
          enable: getNotice?.enable ? false : true,
        });
      } else {
        await setDoc(noticeRef, {
          enable: true,
        });
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsEnabling(false);
    }
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!message && !selectedBgColor) {
      return toast.error("Nothing to update!");
    }
    setIsLoading(true);
    try {
      const noticeRef = doc(db, "settings/notice");
      const noticeSnaps = await getDoc(noticeRef);
      if (noticeSnaps.exists()) {
        await updateDoc(noticeRef, {
          ...(message && { message: message }),
          ...(selectedBgColor && { bgColor: selectedBgColor }),
        });
      } else {
        await setDoc(noticeRef, {
          ...(message && { message: message }),
          ...(selectedBgColor && { bgColor: selectedBgColor }),
        });
      }
      toast.success(`Updated!`);
    } catch (error) {
      toast.error("Failed! Server error!");
    } finally {
      setIsLoading(false);
    }
  };
  if (noticeDataIsLoading) {
    return <LoadingScreen fullScreen={false} bg="bg-white" />;
  }
  return (
    <div>
      <div className="flex items-center">
        <span className="mr-3 text-lg">Enable notice bar</span>
        <Toggle
          isLoading={isEnabling}
          enabled={getNotice?.enable || false}
          onChange={toggleNotice}
        />
      </div>
      <form onSubmit={handelSubmit} className="mt-4">
        <label className="block max-w-xs">
          <SelectInput
            defaultValue={getNotice?.bgColor || "#2895D9"}
            name="variants"
            label="Background color"
            onChange={(event) => {
              setSelectedBgColor(event.target.value);
            }}
          >
            {Colors.map((color) => (
              <option
                key={color.value}
                value={color.value}
                selected={getNotice?.bgColor == color.value}
              >
                {color.name}
              </option>
            ))}
          </SelectInput>
        </label>
        <label className="block mt-2">
          <div className="flex flex-col sm:flex-row justify-center  gap-4">
            <TextInput
              type="text"
              name="message"
              label="Message"
              required
              defaultValue={getNotice?.message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`btn btn-primary px-8 rounded ${
                isLoading && "loading"
              }`}
            >
              Update
            </button>
          </div>
        </label>
      </form>
    </div>
  );
};

export default NoticeBar;
