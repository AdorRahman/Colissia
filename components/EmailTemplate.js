export const MAIL_CREATE_ACCOUNT = `
<body style="margin: 0; padding: 0;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td style="padding: 30px 0 30px 0;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="800px"
                    style="border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;">
                    <tr>
                        <td align="center" bgcolor="#f2f2f2"
                            style=" color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                            <div style="display: inline-flex;     align-items: center;">
                                <div style="display: block!important; margin-right: 30px;">
                                    <span style="color: #b3b3b3; font-style: italic; font-family: 'Noto Serif JP', serif; padding-bottom: 10px; font-size: 20px;">
                                        <b>Hello from Colissia!</b>
                                        <div style="color: #153643; font-family: Helvetica Neue,Helvetica,Roboto,Arial,sans-serif; font-style: italic; font-size: 36px; padding-top: 10px;">
                                            <b>Welcome Aboard...!</b>
                                        </div>
                                    </span>
                                   
                                </div>
                                <a class="margin-left: 30px;" href="https://curiouscraftltd.com/" target="_blank"><img src="https://curiouscraft.vercel.app/img/logo.png" alt="Colissia Global Ltd." width="140" height="auto" style="display: block; padding: 0px 4px 40px 50px;" />  </a>
                            </div>
                            
                        </td>
                  
                    </tr>
                
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 50px 30px 50px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="color: #747474; font-family: Arial, sans-serif; font-size: 16px;">
                                        <span>Hello {{name}},</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style="padding: 20px 0 30px 0; color: #747474; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">

                                        We're really happy to have you as one of our Curious customers...!<br>
                                        Hope, you will be happy with our products and that you will shop with us again and again... If you think we should add any items to our store, don’t hesitate to contact us and share your feedback...
                                        <br><br>
                                        In according to use our site, we stored your information. Please check our <a style="color: #F96A01" target="_blank" href="https://curiouscraftltd.com/privacy-policy">Privacy Policy</a>  to know, how we keep your data safe... Here's our <a style="color: #F96A01" target="_blank" href="https://curiouscraftltd.com/refund-policy">Delivery and Refund Policy</a>, in case you want to be aware of...<br>
                                        But, stay assured, our customers loves our service as always...!                           
                                    </td>
                                </tr>
                                <tr>
                                    <td style=" padding-bottom: 10px;     display: flex;
                                    justify-content: center;
                                    font-family: Arial, sans-serif; font-size: 16px;">
                                        <a href="https://curiouscraftltd.com/dashboard" target="_blank" style="background-color: #F96A01; color: #ffffff; padding: 15px 40px 15px 40px;  font-weight: 900; text-decoration: none; border-radius: 4px;">View Account</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style="padding: 20px 0 60px 0; color: #747474; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">

                                        Until then, enjoy...!
                                     
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color: #747474; font-family: Arial, sans-serif; font-size: 16px;">
                                        <span>Best Regards,
                                            <br>
                                            Colissia 
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#1b1e24" style="padding: 32px 30px 30px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" cellpadding="0">
                                <tr style="text-align: center;">
                                    <td style="color: #ffffff; align="center"; font-family: Arial, sans-serif; font-size: 34px; border-bottom: 1px dashed #fff; padding: 30px 0px 20px 0px; border-top: 0px;"
                                        >
                                        <a style="padding:0 16px;" href="https://curiouscraftltd.com/" target="_blank">
                                            <img src="https://curiouscraft.vercel.app/img/social/gl.png" width="36" height="36" />
                                        </a>
                                     <a style="padding:0 16px;" href="https://www.facebook.com/curiouscraftltd" target="_blank">  
                                        <img src="https://curiouscraft.vercel.app/img/social/fb.png" width="36" height="36" />
                                    </a>
                                       
                                     <a style="padding:0 16px;" href="https://wa.me/+8801608563609" target="_blank"> 
                                        <img src="https://curiouscraft.vercel.app/img/social/wa.png" width="36" height="36" />
                                    </a>
                                     
                                            <a style="padding:0 16px;" href="https://www.instagram.com/curious_craft_ltd/" target="_blank"> 
                                                <img src="https://curiouscraft.vercel.app/img/social/ig.png" width="36" height="36" />
                                            </a>
                                    
                                    </td>
                                  
                                </tr>
                                <tr>
                                    <td style="color: #ffffff; text-align: center; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; padding-top: 30px;"
                                        width="100%">
                                       ©2019-<span>{{year}}</span> Colissia Global Ltd. | All rights reserved.
                                    </td>
                                  
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
`;

export const MAIL_ON_HOLD = `
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td style="padding: 30px 0 30px 0;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="800px"
                    style="border-collapse:collapse;border:1px solid #cccccc;border-spacing:0; margin-bottom: 20px!important; border-collapse: collapse;">
                    
                    <tr>
                        <td align="center" bgcolor="#f2f2f2"
                            style=" color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                            <div style="padding-top:30px; display: inline-flex;     align-items: center;">
                                <div style="display: block!important; margin-right: 30px;">
                                    <span style="color: #b3b3b3; font-style: italic; font-family: 'Noto Serif JP', serif; padding-bottom: 10px; font-size: 20px;">
                                        <b>Hello from Colissia!</b>
                                        <div style="color: #153643; font-family: Helvetica Neue,Helvetica,Roboto,Arial,sans-serif; font-style: italic; font-size: 36px; padding-top: 10px;">
                                            <b>Verifying your Order...!</b>
                                        </div>
                                    </span>
                                   
                                </div>
                                <a class="margin-left: 30px;" href="https://curiouscraftltd.com/" target="_blank"><img src="https://curiouscraft.vercel.app/img/logo.png" alt="Colissia Global Ltd." width="140" height="auto" style="display: block; padding: 0px 4px 40px 50px;" />  </a>
                            </div>
                            
                        </td>
                  
                    </tr>
                
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 50px 30px 50px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                
                                <tr>
                                    <td style="color: #747474; font-family: Arial, sans-serif; font-size: 16px;">
                                        <span>Hello {{name}},</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style="padding: 20px 0 30px 0; color: #747474; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">

                                        Your order is on hold until we confirm your payment has been received...<br>
                                        Please wait for a moment till we check and update your order status... Generally, it takes around
                                        5-10 minutes to update order...
                                        
                                       
                                        <br><br>
                                       <div style="color: #747474;">  You can keep yourself updated about the order directly from your account dashboard - </div> 

                                     

                                    </td>
                                </tr>
                                <tr>
                                    <td style=" padding-bottom: 10px;     display: flex;
                                    justify-content: center;
                                    position: relative;
                                    top: -13px; font-family: Arial, sans-serif; font-size: 16px;">
                                        <a href="https://curiouscraftltd.com/dashboard/orders/{{orderDetails.id}}" target="_blank" style="background-color: #F96A01; color: #ffffff; padding: 15px 60px 15px 60px;  font-weight: 900; text-decoration: none; border-radius: 4px;">View Order</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color: #747474; font-family: Arial, sans-serif; font-size: 16px;">
                                        <span>Best Regards,
                                            <br>
                                            Colissia 
                                        </span>
                                    </td>
                                </tr>

                                
                            </table>
                        </td>
                    </tr>

                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="800px"
                style="border-collapse:collapse;border:1px solid #cccccc;border-spacing:0; margin-bottom: 20px!important;">
                    <tr>
                        <td bgcolor="#f1fffa" style="padding: 0px 30px 50px 30px; margin-top: 10px; margin-bottom: 10px;    font-family: system-ui; ">
                    <p style="text-align: center; margin-bottom: 0px; font-size: 36px; font-weight: 600;">Order Details</p>
                            <div style="display: flex; font-style: italic; color: #747474; justify-content: space-between;">
                                <p>Order ID: <span style="color: #FF0000; font-style: normal; margin-right:10px;">{{orderDetails.id}}</span></p>
                                <p>Order date: <span style="font-style: normal;">{{createdAt}}</span></p>
                            </div>

                    <table border="0"  style="border: 1px; font-size: 16px;" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <th style="text-align: center; padding-top: 10px; color: #564e4e; padding-bottom: 10px; border-bottom: 4px solid #ADDCDB; ">Product</th>
                        <th style="text-align: center; padding-top: 10px; color: #564e4e; padding-bottom: 10px; border-bottom: 4px solid #ADDCDB;">Quantity</th>
                        <th style="text-align: center; padding-top: 10px; color: #564e4e; padding-bottom: 10px;     padding-right: 40px;
                        padding-left: 40px; border-bottom: 4px solid #ADDCDB;">Price</th>
                    </tr>
                    {{#each products}}
                    <tr>
                        <td style="text-align: left; padding-top: 10px; color: #564e4e; padding-bottom: 10px; border-bottom: 4px solid #ADDCDB; padding-left: 10px; border-left: 4px solid #ADDCDB;">
                        <div style="display: inline-flex;">
                            <img src="{{this.imageURL}}"  style="  width: 40px; height: auto; margin-right: 10px;" />
                            <div>
                            <span style="color:#747474;">{{this.productName}}</span> <br> 
                            <span style="font-weight: bold;">Value:</span> <span style="color: #747474;  ">{{this.name}}</span>
                        </div>
                        </div>
                        </td>
                        <td style="text-align: center; padding-top: 10px;  padding-bottom: 10px; color: #747474; border-bottom: 4px solid #ADDCDB;     border-right: 4px solid #ADDCDB;
                        border-left: 4px solid #ADDCDB;">{{this.quantity}}</td>
                        <td style="text-align: center; padding: 0px 0px 0px 0px; color: #747474; border-bottom: 4px solid #ADDCDB;       border-right: 4px solid #ADDCDB;">৳ {{this.price}}</td>
                    </tr>
                    {{/each}}
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Subtotal:</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">৳ {{subtotal}}</td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Discount Coupon:&nbsp;&nbsp; <span style="color: #747474;">{{coupon}}</span></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">-৳ {{discount}}</td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Payment Method:</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">{{orderDetails.paymentMethod.name}} </td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Payment Fee:</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">৳ {{paymentFee}}</td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Total:	</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">৳ {{orderDetails.totalAmount}}</td>
                    </tr>
                  
                 
                    </table>
                    </td>
                    </tr>

                </table>

                
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="800px"
                style="border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;">
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 0px 150px 0px 150px;  font-family: system-ui;">
                            <p style="text-align: center; font-size: 36px; font-weight: 600;">Billing Address</p>
                            <table style="background: rgb(255, 255, 255); border:2px dotted black" class="border-dashed" cellpadding="0" cellspacing="0" width="100%">
                                <tr style="display: flex; flex-direction: column;">
                                    <td style=" font-weight: 600; text-align: center; font-family: Arial, sans-serif; padding: 10px; width: 100%; font-size: 16px;"
                                        width="100%">
                                        <p style="margin-bottom: -5px;">{{address.firstName}} {{address.lastName}}</p>
                                        <p style="margin-bottom: -5px;">{{address.street}}</p>
                                        <p style="margin-bottom: -5px;">{{address.district}}</p>
                                        <p style="margin-bottom: -5px;">{{address.city}}</p>
                                        <p style="color: #fc9b40;  text-decoration: underline;">{{address.email}}</p>  
                                    </td>
                                   
                                </tr>
                            </table>
                            <p style="text-align: left; font-size: 16px; font-weight: 400; padding-top: 30px;"></p>
                        </td>
                    </tr>
                    
               
                    <tr>
                        <td bgcolor="#1b1e24" style="padding: 32px 30px 30px 30px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" cellpadding="0">
                            <tr style="text-align: center;">
                                <td style="color: #ffffff; align="center"; font-family: Arial, sans-serif; font-size: 34px; border-bottom: 1px dashed #fff; padding: 30px 0px 20px 0px; border-top: 0px;"
                                    >
                                    <a style="padding:0 16px;" href="https://curiouscraftltd.com/" target="_blank">
                                        <img src="https://curiouscraft.vercel.app/img/social/gl.png" width="36" height="36" />
                                    </a>
                                <a style="padding:0 16px;" href="https://www.facebook.com/curiouscraftltd" target="_blank">  
                                    <img src="https://curiouscraft.vercel.app/img/social/fb.png" width="36" height="36" />
                                </a>
                                
                                <a style="padding:0 16px;" href="https://wa.me/+8801608563609" target="_blank"> 
                                    <img src="https://curiouscraft.vercel.app/img/social/wa.png" width="36" height="36" />
                                </a>
                                
                                        <a style="padding:0 16px;" href="https://www.instagram.com/curious_craft_ltd/" target="_blank"> 
                                            <img src="https://curiouscraft.vercel.app/img/social/ig.png" width="36" height="36" />
                                        </a>
                                
                                </td>
                            
                            </tr>
                            <tr>
                                <td style="color: #ffffff; text-align: center; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; padding-top: 30px;"
                                    width="100%">
                                ©2019-<span>{{year}}</span> Colissia Global Ltd. | All rights reserved.
                                </td>
                            
                            </tr>
                        </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
`;

export const MAIL_PROCESSING = `
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td style="padding: 30px 0 30px 0;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="800px"
                    style="margin-bottom: 20px!important; border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;">
                    
                    <tr>
                        <td align="center" bgcolor="#f2f2f2"
                            style=" color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                            <div style="padding-top:30px; display: inline-flex;     align-items: center;">
                                <div style="display: block!important; margin-right: 30px;">
                                    <span style="color: #b3b3b3; font-style: italic; font-family: 'Noto Serif JP', serif; padding-bottom: 10px; font-size: 20px;">
                                        <b>Hello from Colissia!</b>
                                        <div style="color: #153643; font-family: Helvetica Neue,Helvetica,Roboto,Arial,sans-serif; font-style: italic; font-size: 36px; padding-top: 10px;">
                                            <b>Processing your Order...!</b>
                                        </div>
                                    </span>
                                   
                                </div>
                                <a class="margin-left: 30px;" href="https://curiouscraftltd.com/" target="_blank"><img src="https://curiouscraft.vercel.app/img/logo.png" alt="Colissia Global Ltd." width="140" height="auto" style="display: block; padding: 0px 4px 40px 50px;" />  </a>
                            </div>
                            
                        </td>
                  
                    </tr>
                
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 50px 30px 50px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                
                                <tr>
                                    <td style="color: #747474; font-family: Arial, sans-serif; font-size: 16px;">
                                        <span>Hello {{name}},</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style="padding: 20px 0 30px 0; color: #747474; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">

                                        Your order has been received with warmth and is now being processed...<br>
                                        It may take 30 minutes up to 24 hours to deliver your product(s)... Please allow us some moments, you'll get notified soon...!
                                        
                                       
                                        <br><br>
                                       <div style="color: #747474;">  You can keep yourself updated about the order directly from your account dashboard - </div> 

                                     

                                    </td>
                                </tr>
                                <tr>
                                    <td style=" padding-bottom: 10px;     display: flex;
                                    justify-content: center;
                                    position: relative;
                                    top: -13px; font-family: Arial, sans-serif; font-size: 16px;">
                                        <a href="https://curiouscraftltd.com/dashboard/orders/{{orderDetails.id}}" target="_blank" style="background-color: #F96A01; color: #ffffff; padding: 15px 60px 15px 60px;  font-weight: 900; text-decoration: none; border-radius: 4px;">View Order</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color: #747474; font-family: Arial, sans-serif; font-size: 16px;">
                                        <span>Best Regards,
                                            <br>
                                            Colissia 
                                        </span>
                                    </td>
                                </tr>

                                
                            </table>
                        </td>
                    </tr>

                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="800px"
                style="margin-bottom: 20px!important; border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;">
                    <tr>
                        <td bgcolor="#f1fffa" style="padding: 0px 30px 50px 30px; margin-top: 10px; margin-bottom: 10px;    font-family: system-ui; ">
                    <p style="text-align: center; margin-bottom: 0px; font-size: 36px; font-weight: 600;">Order Details</p>
                            <div style="display: flex; font-style: italic; color: #747474; justify-content: space-between;">
                                <p>Order ID: <span style="color: #FF0000; font-style: normal; margin-right:10px;">{{orderDetails.id}}</span></p>
                                <p>Order date: <span style="font-style: normal;">{{createdAt}}</span></p>
                            </div>

                    <table border="0"  style="border: 1px; font-size: 16px;" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <th style="text-align: center; padding-top: 10px; color: #564e4e; padding-bottom: 10px; border-bottom: 4px solid #ADDCDB; ">Product</th>
                        <th style="text-align: center; padding-top: 10px; color: #564e4e; padding-bottom: 10px; border-bottom: 4px solid #ADDCDB;">Quantity</th>
                        <th style="text-align: center; padding-top: 10px; color: #564e4e; padding-bottom: 10px;     padding-right: 40px;
                        padding-left: 40px; border-bottom: 4px solid #ADDCDB;">Price</th>
                    </tr>
                    {{#each products}}
                    <tr>
                        <td style="text-align: left; padding-top: 10px; color: #564e4e; padding-bottom: 10px; border-bottom: 4px solid #ADDCDB; padding-left: 10px; border-left: 4px solid #ADDCDB;">
                        <div style="display: inline-flex;">
                            <img src="{{this.imageURL}}"  style="  width: 40px; height: auto; margin-right: 10px;" />
                            <div>
                            <span style="color:#747474;">{{this.productName}}</span> <br> 
                            <span style="font-weight: bold;">Value:</span> <span style="color: #747474;  ">{{this.name}}</span>
                        </div>
                        </div>
                        </td>
                        <td style="text-align: center; padding-top: 10px;  padding-bottom: 10px; color: #747474; border-bottom: 4px solid #ADDCDB;     border-right: 4px solid #ADDCDB;
                        border-left: 4px solid #ADDCDB;">{{this.quantity}}</td>
                        <td style="text-align: center; padding: 0px 0px 0px 0px; color: #747474; border-bottom: 4px solid #ADDCDB;       border-right: 4px solid #ADDCDB;">৳ {{this.price}}</td>
                    </tr>
                    {{/each}}
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Subtotal:</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">৳ {{subtotal}}</td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Discount Coupon:&nbsp;&nbsp; <span style="color: #747474;">{{coupon}}</span></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">-৳ {{discount}}</td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Payment Method:</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">{{orderDetails.paymentMethod.name}} </td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Payment Fee:</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">৳ {{paymentFee}}</td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Total:	</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">৳ {{orderDetails.totalAmount}}</td>
                    </tr>
                  
                 
                    </table>
                    </td>
                    </tr>

                </table>

                
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="800px"
                style="border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;">
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 0px 150px 0px 150px;  font-family: system-ui;">
                            <p style="text-align: center; font-size: 36px; font-weight: 600;">Billing Address</p>
                            <table style="background: rgb(255, 255, 255); border:2px dotted black;" class="border-dashed" cellpadding="0" cellspacing="0" width="100%">
                                <tr style="display: flex; flex-direction: column;">
                                    <td style=" font-weight: 600; text-align: center; font-family: Arial, sans-serif; padding: 10px; width: 100%; font-size: 16px;"
                                        width="100%">
                                        <p style="margin-bottom: -5px;">{{address.firstName}} {{address.lastName}}</p>
                                        <p style="margin-bottom: -5px;">{{address.street}}</p>
                                        <p style="margin-bottom: -5px;">{{address.district}}</p>
                                        <p style="margin-bottom: -5px;">{{address.city}}</p>
                                        <p style="color: #fc9b40;  text-decoration: underline;">{{address.email}}</p>  
                                    </td>
                                   
                                </tr>
                            </table>
                            <p style="text-align: left; font-size: 16px; font-weight: 400; padding-top: 30px;"></p>
                        </td>
                    </tr>
                    
               
                    <tr>
                        <td bgcolor="#1b1e24" style="padding: 32px 30px 30px 30px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" cellpadding="0">
                            <tr style="text-align: center;">
                                <td style="color: #ffffff; align="center"; font-family: Arial, sans-serif; font-size: 34px; border-bottom: 1px dashed #fff; padding: 30px 0px 20px 0px; border-top: 0px;"
                                    >
                                    <a style="padding:0 16px;" href="https://curiouscraftltd.com/" target="_blank">
                                        <img src="https://curiouscraft.vercel.app/img/social/gl.png" width="36" height="36" />
                                    </a>
                                <a style="padding:0 16px;" href="https://www.facebook.com/curiouscraftltd" target="_blank">  
                                    <img src="https://curiouscraft.vercel.app/img/social/fb.png" width="36" height="36" />
                                </a>
                                
                                <a style="padding:0 16px;" href="https://wa.me/+8801608563609" target="_blank"> 
                                    <img src="https://curiouscraft.vercel.app/img/social/wa.png" width="36" height="36" />
                                </a>
                                
                                        <a style="padding:0 16px;" href="https://www.instagram.com/curious_craft_ltd/" target="_blank"> 
                                            <img src="https://curiouscraft.vercel.app/img/social/ig.png" width="36" height="36" />
                                        </a>
                                
                                </td>
                            
                            </tr>
                            <tr>
                                <td style="color: #ffffff; text-align: center; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; padding-top: 30px;"
                                    width="100%">
                                ©2019-<span>{{year}}</span> Colissia Global Ltd. | All rights reserved.
                                </td>
                            
                            </tr>
                        </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
`;

export const MAIL_COMPLETED = `
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td style="padding: 30px 0 30px 0;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="800px"
                    style="margin-bottom: 20px!important; border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;">
                    
                    <tr>
                        <td align="center" bgcolor="#f2f2f2"
                            style=" color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                            <div style="padding-top:30px; display: inline-flex;     align-items: center;">
                                <div style="display: block!important; margin-right: 30px;">
                                    <span style="color: #b3b3b3; font-style: italic; font-family: 'Noto Serif JP', serif; padding-bottom: 10px; font-size: 20px;">
                                        <b>Hello from Colissia!</b>
                                        <div style="color: #153643; font-family: Helvetica Neue,Helvetica,Roboto,Arial,sans-serif; font-style: italic; font-size: 36px; padding-top: 10px;">
                                            <b>Order is Delivered...!</b>
                                        </div>
                                    </span>
                                   
                                </div>
                                <a class="margin-left: 30px;" href="https://curiouscraftltd.com/" target="_blank"><img src="https://curiouscraft.vercel.app/img/logo.png" alt="Colissia Global Ltd." width="140" height="auto" style="display: block; padding: 0px 4px 40px 50px;" />  </a>
                            </div>
                            
                        </td>
                  
                    </tr>
                
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 50px 30px 50px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                
                                <tr>
                                    <td style="color: #747474; font-family: Arial, sans-serif; font-size: 16px;">
                                        <span>Hello {{name}},</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style="padding: 20px 0 15px 0; color: #747474; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">

                                        Your order is completed and delivered successfully...<br>
                                        Please check your ordered keys directly from your account dashboard -
               
                                    </td>
                                </tr>
                                <tr>
                                    <td style=" padding-bottom: 10px;     display: flex;
                                    justify-content: center;
                                    position: relative;
                                    top: -13px; font-family: Arial, sans-serif; font-size: 16px;">
                                        <a href="https://curiouscraftltd.com/dashboard/orders/{{orderDetails.id}}" target="_blank" style="background-color: #F96A01; color: #ffffff; padding: 15px 60px 15px 60px;  font-weight: 900; text-decoration: none; border-radius: 4px;">View Order</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                    style="padding: 15px 0 20px 0; color: #747474; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">

                                    Don't forget to write a review, if we could make you satisfied...<br>
                                    This will help others to know about our service more...!

                                
                                    <br><br>
                                    <div style="color: #747474;">  Here's our review links, for your ease - </div> 
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color: #747474; padding-bottom: 40px; padding-top: 20px; font-family: Arial, sans-serif; font-size: 16px;">
                                        <div style=" font-weight: bold; justify-content: center; display: flex;">
                                            <div style="padding-right: 30px;">
                                                <a class="reviews" target="_blank" href="https://www.trustpilot.com/evaluate/colissia.com">Review us on Trustpilot</a>
                                            
                                                <a class="reviews" href="https://www.trustpilot.com/evaluate/colissia.com" target="_blank"><img src="https://curiouscraft.vercel.app/img/social/review-tp.png" alt="Colissia Global Ltd." width="180px" height="auto" style="display: block;  position: relative;
                                                top: 10px;" />  </a>
                                            </div>


                                            <div style="padding-left: 30px;">
                                                <a class="reviews" target="_blank" style="margin-bottom: 2px;" href="https://www.facebook.com/curiouscraftltd/reviews">Review us on Facebook</a>
                                            
                                                <a class="reviews" href="https://www.facebook.com/curiouscraftltd/reviews" target="_blank"><img src="https://curiouscraft.vercel.app/img/social/review-fb.png" alt="Colissia Global Ltd." width="180px" height="auto" style="display: block;     position: relative;
                                                top: 15px;" />  </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color: #747474; font-family: Arial, sans-serif; font-size: 16px;">
                                        <span>Best Regards,
                                            <br>
                                            Colissia 
                                        </span>
                                    </td>
                                </tr>

                                
                            </table>
                        </td>
                    </tr>

                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="800px"
                style="margin-bottom: 20px!important; border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;">
                    <tr>
                        <td bgcolor="#f1fffa" style="padding: 0px 30px 50px 30px; margin-top: 10px; margin-bottom: 10px;    font-family: system-ui; ">
                    <p style="text-align: center; margin-bottom: 0px; font-size: 36px; font-weight: 600;">Order Details</p>
                            <div style="display: flex; font-style: italic; color: #747474; justify-content: space-between;">
                                <p>Order ID: <span style="color: #FF0000; font-style: normal; margin-right:10px;">{{orderDetails.id}}</span></p>
                                <p>Order date: <span style="font-style: normal;">{{createdAt}}</span></p>
                            </div>

                    <table border="0"  style="border: 1px; font-size: 16px;" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <th style="text-align: center; padding-top: 10px; color: #564e4e; padding-bottom: 10px; border-bottom: 4px solid #ADDCDB; ">Product</th>
                        <th style="text-align: center; padding-top: 10px; color: #564e4e; padding-bottom: 10px; border-bottom: 4px solid #ADDCDB;">Quantity</th>
                        <th style="text-align: center; padding-top: 10px; color: #564e4e; padding-bottom: 10px;     padding-right: 40px;
                        padding-left: 40px; border-bottom: 4px solid #ADDCDB;">Price</th>
                    </tr>
                    {{#each products}}
                    <tr>
                        <td style="text-align: left; padding-top: 10px; color: #564e4e; padding-bottom: 10px; border-bottom: 4px solid #ADDCDB; padding-left: 10px; border-left: 4px solid #ADDCDB;">
                        <div style="display: inline-flex;">
                            <img src="{{this.imageURL}}"  style="  width: 40px; height: auto; margin-right: 10px;" />
                            <div>
                            <span style="color:#747474;">{{this.productName}}</span> <br> 
                            <span style="font-weight: bold;">Value:</span> <span style="color: #747474;  ">{{this.name}}</span>
                        </div>
                        </div>
                        </td>
                        <td style="text-align: center; padding-top: 10px;  padding-bottom: 10px; color: #747474; border-bottom: 4px solid #ADDCDB;     border-right: 4px solid #ADDCDB;
                        border-left: 4px solid #ADDCDB;">{{this.quantity}}</td>
                        <td style="text-align: center; padding: 0px 0px 0px 0px; color: #747474; border-bottom: 4px solid #ADDCDB;       border-right: 4px solid #ADDCDB;">৳ {{this.price}}</td>
                    </tr>
                    {{/each}}
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Subtotal:</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">৳ {{subtotal}}</td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Discount Coupon:&nbsp;&nbsp; <span style="color: #747474;">{{coupon}}</span></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">-৳ {{discount}}</td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Payment Method:</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">{{orderDetails.paymentMethod.name}} </td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Payment Fee:</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">৳ {{paymentFee}}</td>
                    </tr>
                    <tr style="color: #747474;">
                        <td style="text-align: left; padding-left: 10px; color: #564e4e; border-left: 4px solid #ADDCDB; border-bottom: 4px solid #ADDCDB; font-weight: bold; ">Total:	</td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB;"></td>
                        <td style="text-align: center; padding: 10px 0px 10px 0px; border-bottom: 4px solid #ADDCDB; border-right: 4px solid #ADDCDB;">৳ {{orderDetails.totalAmount}}</td>
                    </tr>
                  
                 
                    </table>
                    </td>
                    </tr>

                </table>

                
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="800px"
                style="border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;">
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 0px 150px 0px 150px;  font-family: system-ui;">
                            <p style="text-align: center; font-size: 36px; font-weight: 600;">Billing Address</p>
                            <table style="background: rgb(255, 255, 255); border:2px dotted black;" class="border-dashed" cellpadding="0" cellspacing="0" width="100%">
                                <tr style="display: flex; flex-direction: column;">
                                    <td style=" font-weight: 600; text-align: center; font-family: Arial, sans-serif; padding: 10px; width: 100%; font-size: 16px;"
                                        width="100%">
                                        <p style="margin-bottom: -5px;">{{address.firstName}} {{address.lastName}}</p>
                                        <p style="margin-bottom: -5px;">{{address.street}}</p>
                                        <p style="margin-bottom: -5px;">{{address.district}}</p>
                                        <p style="margin-bottom: -5px;">{{address.city}}</p>
                                        <p style="color: #fc9b40;  text-decoration: underline;">{{address.email}}</p>  
                                    </td>
                                   
                                </tr>
                            </table>
                            <p style="text-align: left; font-size: 16px; font-weight: 400; padding-top: 30px;"></p>
                        </td>
                    </tr>
                    
               
                    <tr>
                        <td bgcolor="#1b1e24" style="padding: 32px 30px 30px 30px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" cellpadding="0">
                            <tr style="text-align: center;">
                                <td style="color: #ffffff; align="center"; font-family: Arial, sans-serif; font-size: 34px; border-bottom: 1px dashed #fff; padding: 30px 0px 20px 0px; border-top: 0px;"
                                    >
                                    <a style="padding:0 16px;" href="https://curiouscraftltd.com/" target="_blank">
                                        <img src="https://curiouscraft.vercel.app/img/social/gl.png" width="36" height="36" />
                                    </a>
                                <a style="padding:0 16px;" href="https://www.facebook.com/curiouscraftltd" target="_blank">  
                                    <img src="https://curiouscraft.vercel.app/img/social/fb.png" width="36" height="36" />
                                </a>
                                
                                <a style="padding:0 16px;" href="https://wa.me/+8801608563609" target="_blank"> 
                                    <img src="https://curiouscraft.vercel.app/img/social/wa.png" width="36" height="36" />
                                </a>
                                
                                        <a style="padding:0 16px;" href="https://www.instagram.com/curious_craft_ltd/" target="_blank"> 
                                            <img src="https://curiouscraft.vercel.app/img/social/ig.png" width="36" height="36" />
                                        </a>
                                
                                </td>
                            
                            </tr>
                            <tr>
                                <td style="color: #ffffff; text-align: center; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; padding-top: 30px;"
                                    width="100%">
                                ©2019-<span>{{year}}</span> Colissia Global Ltd. | All rights reserved.
                                </td>
                            
                            </tr>
                        </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
`;
