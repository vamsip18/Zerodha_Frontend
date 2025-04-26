import React from 'react';

function Footer() {
    return ( 
        <footer className='border-top mt-5' style={{backgroundColor:"#f7f7f7"}}>
        <div className='container mt-5' >
            <div className='row'>
                <div className='col'>
                    <img src='./images/logo.svg' style={{width:"50%"}} alt='zerodha'></img>
                    <p className='mt-3 text-muted'>&copy; 2010 - 2025, Zerodha Broking Ltd.<br/>

                    All rights reserved.</p>
                </div>
                <div className='col'>
                    <h5 style={{fontWeight: "normal",marginBottom:"5"}}>Company</h5>
                        <a className='mb text-muted' style={{textDecoration:"none",color:"black"}} href=''>About</a><br/>
                        <a className='mb text-muted' style={{textDecoration:"none",color:"black"}}href=''>Products</a><br/>
                        <a className='mb text-muted' style={{textDecoration:"none",color:"black"}}href=''>Pricing</a><br/>
                        <a className='mb text-muted' style={{textDecoration:"none",color:"black"}}href=''>Referral programme</a><br/>
                        <a className='mb text-muted' style={{textDecoration:"none",color:"black"}}href=''>Careers</a><br/>
                        <a className='mb text-muted' style={{textDecoration:"none",color:"black"}}href=''>Zerodha.tech</a><br/>
                        <a className='mb text-muted' style={{textDecoration:"none",color:"black"}}href=''>Open source</a><br/>
                        <a className='mb text-muted' style={{textDecoration:"none",color:"black"}}href=''>Press & media</a><br/>
                        <a className='mb text-muted' style={{textDecoration:"none",color:"black"}}href=''>Zerodha Cares (CSR)</a><br/>
                </div>
                <div className='col'>
                    <h5 style={{fontWeight: "normal",marginBottom:"5"}}>Support</h5>
                        <a href='' className='mb text-muted' style={{textDecoration:"none",color:"black"}}>Contact us</a><br/>
                        <a href='' className='mb text-muted' style={{textDecoration:"none",color:"black"}}>Support portal</a><br/>
                        <a href='' className='mb text-muted' style={{textDecoration:"none",color:"black"}}>Z-Connect blog</a><br/>
                        <a href='' className='mb text-muted' style={{textDecoration:"none",color:"black"}}>List of charges</a><br/>
                        <a href='' className='mb text-muted' style={{textDecoration:"none",color:"black"}}>Downloads & resources</a><br/>
                        <a href='' className='mb text-muted' style={{textDecoration:"none",color:"black"}}>Videos</a><br/>
                        <a href='' className='mb text-muted' style={{textDecoration:"none",color:"black"}}>Market overview</a><br/>
                        <a href='' className='mb text-muted' style={{textDecoration:"none",color:"black"}}>How to file a complaint?</a><br/>
                        <a href='' className='mb text-muted' style={{textDecoration:"none",color:"black"}}>Status of your complaints</a><br/>
                </div>
                <div className='col'>
                    <h5 style={{fontWeight: "normal",marginBottom:"5"}}>Account</h5>
                        <a href='' className='mb text-muted' style={{textDecoration:"none",color:"black"}}>Open an account</a><br/>
                        <a href='' className='mb text-muted' style={{textDecoration:"none",color:"black"}}>Fund transfer</a><br/>
                </div>
            </div>
            <div className='row mt-5 col-12 text-muted pl-10 m-auto' style={{fontSize:"12px"}}>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='' style={{textDecoration:"none"}}>complaints@zerodha.com</a>, for DP related to <a href='' style={{textDecoration:"none"}}>dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                <p>Procedure to file a complaint on <a href='' style={{textDecoration:"none"}}>SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                <a href='' style={{textDecoration:"none"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>

                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='' style={{textDecoration:"none"}}>create a ticket here.</a></p>
            </div>
            <div className='row mt-5 text-muted pl-5 m-auto text-center' style={{fontSize:"12px",display:"flex",justifyContent:"space-between"}}>
                <ul className=' mb-5' style={{listStyleType:"none",display:"flex",justifyContent:"space-between",textAlign:"center",width:"80%",margin:"auto",fontSize:"13px" }}>
                    <li><a href='' className='text-muted text-center' style={{textDecoration:"none",color:"black",display:"inline"}}>NSE</a> </li>
                    <li><a href=''  className='m-auto text-muted text-center mr-10'style={{textDecoration:"none",color:"black"}}>BSE</a> </li>
                    <li><a href=''  className='m-auto text-muted text-center mr-10'style={{textDecoration:"none",color:"black"}}>MCX </a></li>
                    <li><a href=''  className='m-auto text-muted text-center mr-10'style={{textDecoration:"none",color:"black"}}>Terms & conditions </a></li>
                    <li><a href=''  className='m-auto text-muted text-center mr-10'style={{textDecoration:"none",color:"black"}}>Policies & procedures </a></li>
                    <li><a href=''  className='m-auto text-muted text-center mr-10'style={{textDecoration:"none",color:"black"}}>Privacy policy </a></li>
                    <li><a href=''  className='m-auto text-muted text-center mr-10'style={{textDecoration:"none",color:"black"}}>Disclosure </a></li>
                    <li><a href=''  className='m-auto text-muted text-center mr-10'style={{textDecoration:"none",color:"black"}}>For investor's attention </a></li>
                    <li><a href=''  className='m-auto text-muted text-center mr-10'style={{textDecoration:"none",color:"black"}}>Investor charter</a></li>
                </ul>
            </div>
        </div>
        </footer>
     );
}

export default Footer;