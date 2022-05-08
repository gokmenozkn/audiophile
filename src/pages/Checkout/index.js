import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Layout from '../../components/Layout';
import deliveryIcon from '../../assets/shared/desktop/icon-delivery.svg';
import CheckoutModal from '../../components/CheckoutModal';
import {
  formatPhoneNumber,
  FormatZipCode,
  FormatEMoneyNumber,
  FormatEMoneyPin,
} from '../../helper/InputFormat';
import { useAppContext } from '../../context/AppContext';
import calculateTotal from '../../helper/calculateTotal';

function ErrorMessage() {
  return <div className={styles.errorMessage}>Can't be empty!</div>;
}

const PAYMENT_METHODS = {
  EMONEY: 'e-Money',
  ON_DELİVERY: 'Cash on Delivery',
};

const PAYMENT_METHODS_NAMES = Object.keys(PAYMENT_METHODS);

function CashOnDelivery() {
  return (
    <div className={styles.cashOnDelivery}>
      <div className={styles.icon}>
        <img src={deliveryIcon} alt='' />
      </div>
      <div className={styles.cashOnDelivery__info}>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </div>
    </div>
  );
}

function EMoney() {
  const [moneyNumber, setMoneyNumber] = useState('');
  const [moneyPin, setMoneyPin] = useState('');

  function handleMoneyNumber(e) {
    const formatted = FormatEMoneyNumber(e.target.value);
    setMoneyNumber(formatted);
  }

  function handleMoneyPin(e) {
    const formatted = FormatEMoneyPin(e.target.value);
    setMoneyPin(formatted);
  }

  return (
    <div id='eMoney' className={styles.group_container}>
      <div className={styles.form_group}>
        <label htmlFor='emoney_number'>e-Money Number</label>
        <input
          value={moneyNumber}
          onChange={handleMoneyNumber}
          required
          type='text'
          placeholder='238521993'
        />
      </div>
      <div className={styles.form_group}>
        <label htmlFor='emoney_pin'>e-Money PIN</label>
        <input
          value={moneyPin}
          onChange={handleMoneyPin}
          type='text'
          placeholder='6891'
          required
        />
      </div>
    </div>
  );
}

function Item({ img, name, price, qty }) {
  const mobileImage = img.mobile.replace('./', '');

  return (
    <div className={styles.item}>
      {/* Item image */}
      <img
        src={require(`../../${mobileImage}`)}
        alt='item'
        className={styles.item__img}
      />
      <div className={styles.item__right}>
        <div className={styles.item__right__info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>$ {price}</div>
        </div>
        <div className={styles.item__right__qty}>x{qty}</div>
      </div>
    </div>
  );
}

export default function Checkout() {
  // context
  const { cart } = useAppContext();
  let total = calculateTotal(cart);
  let grandTotal = total + 50 + 1079;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(
    PAYMENT_METHODS.ON_DELİVERY
  );

  // errors
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isMailEmpty, setIsMailEmpty] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);
  const [isAddressEmpty, setIsAddressEmpty] = useState(false);
  const [isZipcodeEmpty, setIsZipcodeEmpty] = useState(false);
  const [isCityEmpty, setIsCityEmpty] = useState(false);
  const [isCountryEmpty, setIsCountryEmpty] = useState(false);

  function openModal() {
    if (!name) {
      setIsNameEmpty(true);
    }

    if (!email) {
      setIsMailEmpty(true);
    }

    if (!phoneNumber) {
      setIsPhoneEmpty(true);
    }

    if (!address) {
      setIsAddressEmpty(true);
    }

    if (!zipcode) {
      setIsZipcodeEmpty(true);
    }

    if (!city) {
      setIsCityEmpty(true);
    }

    if (!country) {
      setIsCountryEmpty(true);
    }

    if (name && email && phoneNumber && address && zipcode && city && country) {
      setIsModalOpen(true);
    }
  }

  function handlePhoneInput(e) {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  }

  function handleZipCode(e) {
    const formattedZipCode = FormatZipCode(e.target.value);
    setZipcode(formattedZipCode);
  }

  function onFormSubmit(e) {
    e.preventDefault();

    if (name && email && phoneNumber && address && zipcode && city && country) {
      setIsModalOpen(true);
    }
  }

  return (
    <Layout>
      <div className={styles.background}>
        <main className={styles.main}>
          <Link className={styles.link} to={-1}>
            Go Back
          </Link>
          <form onSubmit={onFormSubmit}>
            <div className={styles.row}>
              {/* Left side */}
              <div className={styles.left}>
                <h1 className={styles.left__title}>Checkout</h1>

                <div className={styles.form}>
                  {/* Billing details */}
                  <div className={styles.billingDetails}>
                    <h5 className={styles.group_title}>Billing Details</h5>
                    <div className={styles.group_container}>
                      <div className={styles.form_group}>
                        <label htmlFor='name'>Name</label>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type='text'
                          placeholder='Alexei Ward'
                          required
                        />
                        {isNameEmpty && <ErrorMessage />}
                      </div>
                      {/* Email */}
                      <div className={styles.form_group}>
                        <label htmlFor='email'>Email Address</label>
                        <input
                          type='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder='alexei@mail.com'
                          required
                        />
                        {isMailEmpty && <ErrorMessage />}
                      </div>
                      {/* Phone Number */}
                      <div className={styles.form_group}>
                        <label htmlFor='phone'>Phone Number</label>
                        <input
                          value={phoneNumber}
                          onChange={handlePhoneInput}
                          type='text'
                          placeholder='(555) 555-5555'
                          required
                        />
                        {isPhoneEmpty && <ErrorMessage />}
                      </div>
                    </div>
                  </div>

                  {/* Shipping Info */}
                  <div className={styles.shippingInfo}>
                    <h5 className={styles.group_title}>shipping info</h5>
                    <div className={styles.group_container}>
                      <div className={styles.form_group}>
                        <label htmlFor='address'>Address</label>
                        <input
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          type='text'
                          placeholder='1137 Williams Avenue'
                          required
                        />
                        {isAddressEmpty && <ErrorMessage />}
                      </div>
                      <div className={styles.form_group}>
                        <label htmlFor='zip_code'>ZIP Code</label>
                        <input
                          value={zipcode}
                          onChange={handleZipCode}
                          maxLength={5}
                          type='text'
                          placeholder='10001'
                          required
                        />
                        {isZipcodeEmpty && <ErrorMessage />}
                      </div>
                      <div className={styles.form_group}>
                        <label htmlFor='city'>City</label>
                        <input
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          type='text'
                          placeholder='New York'
                          required
                        />
                        {isCityEmpty && <ErrorMessage />}
                      </div>
                      <div className={styles.form_group}>
                        <label htmlFor='country'>Country</label>
                        <input
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          type='text'
                          placeholder='United States'
                          required
                        />
                        {isCountryEmpty && <ErrorMessage />}
                      </div>
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div className={styles.paymentDetails}>
                    <h5 className={styles.group_title}>Payment Details</h5>
                    <div className={styles.paymentMethod}>
                      {PAYMENT_METHODS_NAMES.map((method, ind) => (
                        <div
                          key={ind}
                          className={`${styles.paymentMethod__wrapper} ${
                            paymentMethod === PAYMENT_METHODS[method] &&
                            styles.redBorder
                          }`}
                          onClick={() =>
                            setPaymentMethod(PAYMENT_METHODS[method])
                          }
                        >
                          <div className={styles.circle}>
                            {paymentMethod === PAYMENT_METHODS[method] && (
                              <div
                                style={{
                                  backgroundColor: '#D87D4A',
                                  borderRadius: '50%',
                                  width: '100%',
                                  height: '100%',
                                }}
                              ></div>
                            )}
                          </div>
                          <div className={styles.title}>
                            {PAYMENT_METHODS[method]}
                          </div>
                        </div>
                      ))}
                    </div>
                    {paymentMethod === 'e-Money' ? (
                      <EMoney />
                    ) : (
                      <CashOnDelivery />
                    )}
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className={styles.right}>
                <h3 className={styles.summaryTitle}>Summary</h3>
                {/* Summary items */}
                <div className={styles.items}>
                  {cart.map((itm, index) => {
                    return (
                      <Item
                        key={index}
                        img={itm.img}
                        price={itm.price}
                        name={itm.name}
                        qty={itm.qty}
                      />
                    );
                  })}
                </div>

                {/* Charges */}
                <ul className={styles.chargesList}>
                  <li className={styles.total}>
                    <div>Total</div>
                    <strong>${total}</strong>
                  </li>
                  <li className={styles.shipping}>
                    <div>Shipping</div>
                    <strong>$50</strong>
                  </li>
                  <li className={styles.vat}>
                    <div>Vat (Included)</div>
                    <strong>$1079</strong>
                  </li>
                  <li className={styles.grandTotal}>
                    <div>GRAND TOTAL</div>
                    <strong>${grandTotal}</strong>
                  </li>
                </ul>

                {/* Pay Button */}
                <button onClick={openModal} className={styles.payButton}>
                  CONTINUE & PAY
                </button>
              </div>
            </div>
          </form>
        </main>
        {isModalOpen && <CheckoutModal setModal={setIsModalOpen} />}
      </div>
    </Layout>
  );
}
