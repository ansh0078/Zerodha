import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(240,240,240" }}  >
            <div className='container border-top pt-5'>
                <div className='row'>
                    <div className='col'>
                        <img src='media/images/logo.svg' alt='' style={{ width: "50%" }} />
                        <p>&copy; 2010 - 2026, Zerodha Broking Ltd. <br />All rights reserved.</p>
                    </div>
                    <div className='col'>
                        <p>Account</p>
                        <Link className='anchors' to="">Open demat account</Link><br />
                        <Link className='anchors' to="">Minor demat account</Link><br />
                        <Link className='anchors' to="">NRI demat account</Link><br />
                        <Link className='anchors' to="">Commodity</Link><br />
                        <Link className='anchors' to="">Dematerialisation</Link><br />
                        <Link className='anchors' to="">Fund transfer</Link><br />
                        <Link className='anchors' to="">MTF</Link><br />
                        <Link className='anchors' to="">Referral program</Link><br />
                    </div>
                    <div className='col'>
                        <p>Support</p>
                        <Link className='anchors' to="">Contact us</Link><br />
                        <Link className='anchors' to="">Support portal</Link><br />
                        <Link className='anchors' to="">How to file a complaint?</Link><br />
                        <Link className='anchors' to="">Status of your complaints</Link><br />
                        <Link className='anchors' to="">Bulletin</Link><br />
                        <Link className='anchors' to="">Circular</Link><br />
                        <Link className='anchors' to="">Z-Connect blog</Link><br />
                        <Link className='anchors' to="">Downloads</Link><br />
                    </div>
                    <div className='col'>
                        <p>Company</p>
                        <Link className='anchors' to="">About</Link><br />
                        <Link className='anchors' to="">Philosophy</Link><br />
                        <Link className='anchors' to="">Press & media</Link><br />
                        <Link className='anchors' to="">Careers</Link><br />
                        <Link className='anchors' to="">Zerodha Cares (CSR)</Link><br />
                        <Link className='anchors' to="">Zerodha.tech</Link><br />
                        <Link className='anchors' to="">Open source</Link><br />
                    </div>
                    <div className='col'>
                        <p>Qiuck links</p>
                        <Link className='anchors' to="">Upcoming IPO</Link><br />
                        <Link className='anchors' to="">Brokerage charges</Link><br />
                        <Link className='anchors' to="">Market holidays</Link><br />
                        <Link className='anchors' to="">Economic calendar</Link><br />
                        <Link className='anchors' to="">Calculators</Link><br />
                        <Link className='anchors' to="">Markets</Link><br />
                        <Link className='anchors' to="">Sectors</Link><br />
                    </div>
                </div>
                <div className='mt-5 text-small text-muted' style={{ fontSize: "10px" }}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

                    <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
                </div>
                <div className='text-center'>
                    <Link className='anchors p-2' >NSE</Link> 
                    <Link className='anchors p-2' to=""> BSE</Link> 
                    <Link className='anchors p-2' to="">MCX</Link> 
                    <Link className='anchors p-2' to="">Terms & conditions</Link> 
                    <Link className='anchors p-2' to="">Policies & procedures</Link> 
                    <Link className='anchors p-2' to="">Privacy policy</Link> 
                    <Link className='anchors p-2' to="">Disclosure</Link>
                    <Link className='anchors p-2' to="">For investor's attention</Link> 
                    <Link className='anchors p-2' to="">Investor charter</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;