import React, { useState } from 'react';

function Hero() {
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setLoading(true);
        try {
            const response = await fetch('https://backend-i7ob.onrender.com/api/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mobile }),
            });

            const data = await response.json();

            if (data.success) {
                alert(`OTP sent to ${mobile}`);
                // Open http://localhost:3001/ in a new tab
                window.open('https://dashboard-eight-mu-84.vercel.app/', '_blank');
            } else {
                // alert(`Failed to send OTP: ${data.message || 'Try again later'}`);
                window.open('https://dashboard-eight-mu-84.vercel.app/', '_blank');
            }
        } catch (error) {
            window.open('https://dashboard-eight-mu-84.vercel.app/', '_blank');
            // alert('Error sending OTP. Please try again.');
            // console.error('OTP error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='mt-5'>
            <h1 className='text-center'>Open a free demat and trading account online</h1>
            <h4 className='text-muted mt-4 text-center'>
                Start investing brokerage free and join a community of 1.5+ crore investors and traders
            </h4>
            <div className='row mt-5 p-5'>
                <div className='col-8'>
                    <img src="./Images/signUpImage.svg" alt="hero" />
                </div>
                <div className='col-4 mt-5'>
                    <h2 className='mt-5 fw-bold'>Signup now</h2>
                    <h5 className='mt-3 text-muted'>Or track your existing application</h5>

                    <form onSubmit={handleSubmit} className="otp-form" noValidate>
                        <div className='mt-5'>
                            <div className="d-flex align-items-center border rounded px-2 py-1" style={{ background: "#fff" }}>
                                <img
                                    src="https://flagcdn.com/w40/in.png"
                                    alt="India"
                                    className="me-2"
                                    style={{ width: "24px", height: "18px", objectFit: "cover", borderRadius: "2px" }}
                                />
                                <span className="me-2 text-dark fw-medium">+91</span>
                                <input
                                    type="tel"
                                    className="form-control border-0 shadow-none"
                                    placeholder="Enter your mobile number"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    required
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                />
                            </div>

                            <div className='mt-4 text-center'>
                                <button type="submit" className='btn btn-primary px-4 py-2 rounded shadow-sm fw-semibold' disabled={loading}>
                                    {loading ? 'Logging in...' : 'signup'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;
