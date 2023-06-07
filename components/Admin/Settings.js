import NoticeBar from "./Notice";
import PaymentNumbersSetting from "./PaymentNumbersSetting";

const SettingsAdmin = () => {
  return (
    <>
      <NoticeBar />
      <div className="mt-8">
        <PaymentNumbersSetting />
      </div>
    </>
  );
};

export default SettingsAdmin;
