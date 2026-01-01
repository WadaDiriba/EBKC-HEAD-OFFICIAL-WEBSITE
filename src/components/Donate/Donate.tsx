import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Donation.module.css";
import { FaHeart, FaHandHoldingHeart, FaChurch, FaUsers, FaPrayingHands } from "react-icons/fa";

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<string>("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    anonymous: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const presetAmounts = ["50", "100", "250", "500", "1000"];

  const donationTypes = [
    { id: "general", label: "General Donation", icon: <FaHeart />, description: "Support our church ministries" },
    { id: "building", label: "Building Fund", icon: <FaChurch />, description: "Help us expand our facilities" },
    { id: "mission", label: "Mission Work", icon: <FaHandHoldingHeart />, description: "Support our mission outreach" },
    { id: "youth", label: "Youth Ministry", icon: <FaUsers />, description: "Invest in the next generation" },
    { id: "prayer", label: "Prayer Ministry", icon: <FaPrayingHands />, description: "Support our prayer initiatives" }
  ];

  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setDonationAmount("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const getFinalAmount = () => {
    return customAmount || donationAmount || "0";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          anonymous: false
        });
        setDonationAmount("");
        setCustomAmount("");
      }, 5000);
    }, 2000);
  };

  return (
    <section className={styles.donateSection}>
      {/* Hero Header */}
      <div className={styles.heroHeader}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <FaHeart className={styles.heroIcon} />
            Support Our Mission
          </h1>
          <p className={styles.heroSubtitle}>
            Your generous donation helps us spread the Gospel, serve our community, 
            and transform lives through Christ's love.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Donation Types */}
        <div className={styles.donationTypes}>
          <h2 className={styles.sectionTitle}>Choose Your Donation Type</h2>
          <div className={styles.typesGrid}>
            {donationTypes.map((type) => (
              <button
                key={type.id}
                className={`${styles.typeCard} ${donationType === type.id ? styles.typeCardActive : ""}`}
                onClick={() => setDonationType(type.id)}
              >
                <div className={styles.typeIcon}>{type.icon}</div>
                <h3 className={styles.typeTitle}>{type.label}</h3>
                <p className={styles.typeDescription}>{type.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Main Donation Form */}
        <div className={styles.donationFormContainer}>
          <div className={styles.formWrapper}>
            {/* Left Column - Amount Selection */}
            <div className={styles.amountSection}>
              <h2 className={styles.amountTitle}>Select Amount</h2>
              
              <div className={styles.presetAmounts}>
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`${styles.amountButton} ${donationAmount === amount ? styles.amountButtonActive : ""}`}
                    onClick={() => handleAmountSelect(amount)}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className={styles.customAmountContainer}>
                <label htmlFor="customAmount" className={styles.customLabel}>
                  Or Enter Custom Amount
                </label>
                <div className={styles.customInputWrapper}>
                  <span className={styles.currencySymbol}>$</span>
                  <input
                    type="number"
                    id="customAmount"
                    className={styles.customInput}
                    placeholder="0.00"
                    value={customAmount}
                    onChange={handleCustomAmount}
                    min="1"
                  />
                </div>
              </div>

              <div className={styles.selectedAmount}>
                <span className={styles.amountLabel}>Your Donation:</span>
                <span className={styles.amountValue}>${getFinalAmount()}</span>
              </div>
            </div>

            {/* Right Column - Donor Information */}
            <div className={styles.infoSection}>
              <h2 className={styles.infoTitle}>Donor Information</h2>

              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.successTitle}>Thank You!</h3>
                  <p className={styles.successText}>
                    Your donation form has been submitted. We will contact you shortly 
                    to complete the payment process.
                  </p>
                  <p className={styles.successNote}>
                    For payment processing, please contact us at{" "}
                    <a href="mailto:EBKC12@Yahoo.com" className={styles.emailLink}>
                      EBKC12@Yahoo.com
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.donationForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Full Name {!formData.anonymous && <span className={styles.required}>*</span>}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={styles.formInput}
                      value={formData.name}
                      onChange={handleChange}
                      required={!formData.anonymous}
                      disabled={formData.anonymous}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email Address {!formData.anonymous && <span className={styles.required}>*</span>}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={styles.formInput}
                      value={formData.email}
                      onChange={handleChange}
                      required={!formData.anonymous}
                      disabled={formData.anonymous}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={styles.formInput}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+251 11 123 4567"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={styles.formTextarea}
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Add a personal message or prayer request..."
                    />
                  </div>

                  <div className={styles.checkboxGroup}>
                    <input
                      type="checkbox"
                      id="anonymous"
                      name="anonymous"
                      className={styles.checkbox}
                      checked={formData.anonymous}
                      onChange={handleChange}
                    />
                    <label htmlFor="anonymous" className={styles.checkboxLabel}>
                      Make this donation anonymously
                    </label>
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting || (!donationAmount && !customAmount)}
                  >
                    {isSubmitting ? (
                      <>
                        <span className={styles.spinner}></span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaHeart className={styles.buttonIcon} />
                        Proceed with Donation
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className={styles.paymentInfo}>
          <h2 className={styles.paymentTitle}>Payment Methods</h2>
          <div className={styles.paymentGrid}>
            <div className={styles.paymentCard}>
              <h3 className={styles.paymentCardTitle}>Bank Transfer</h3>
              <p className={styles.paymentCardText}>
                Transfer directly to our church account. Contact us for bank details.
              </p>
              <Link to="/contact" className={styles.paymentLink}>
                Get Bank Details →
              </Link>
            </div>
            <div className={styles.paymentCard}>
              <h3 className={styles.paymentCardTitle}>Mobile Money</h3>
              <p className={styles.paymentCardText}>
                Use mobile money services like M-Pesa, Telebirr, or M-Pesa.
              </p>
              <Link to="/contact" className={styles.paymentLink}>
                Contact Us →
              </Link>
            </div>
            <div className={styles.paymentCard}>
              <h3 className={styles.paymentCardTitle}>In Person</h3>
              <p className={styles.paymentCardText}>
                Visit us during office hours to make your donation in person.
              </p>
              <Link to="/visit" className={styles.paymentLink}>
                Visit Us →
              </Link>
            </div>
          </div>
        </div>

        {/* Why Donate Section */}
        <div className={styles.whyDonate}>
          <h2 className={styles.whyTitle}>Why Your Donation Matters</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>⛪</div>
              <h3 className={styles.whyCardTitle}>Church Operations</h3>
              <p className={styles.whyCardText}>
                Support daily operations, maintenance, and staff to keep our church running smoothly.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>📚</div>
              <h3 className={styles.whyCardTitle}>Ministry Programs</h3>
              <p className={styles.whyCardText}>
                Fund youth programs, Bible studies, and community outreach initiatives.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🌍</div>
              <h3 className={styles.whyCardTitle}>Mission Work</h3>
              <p className={styles.whyCardText}>
                Help us spread the Gospel and support mission work locally and globally.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>❤️</div>
              <h3 className={styles.whyCardTitle}>Community Support</h3>
              <p className={styles.whyCardText}>
                Provide assistance to families in need and support community development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
