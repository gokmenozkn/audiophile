export function formatPhoneNumber(value) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, '');

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // we need to return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you format the area code to early

  if (phoneNumberLength < 4) return phoneNumber;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

export function FormatZipCode(value) {
  if (!value) return value;

  const zip_code = value.replace(/[^\d]/g, '');

  return `${zip_code.slice(0, 5)}`;
}

export function FormatEMoneyNumber(value) {
  if (!value) return value;

  const formattedNumber = value.replace(/[^\d]/g, '');
  const length = formattedNumber.length;

  if (length < 9) return formattedNumber;

  return `${formattedNumber.slice(0, 9)}`;
}

export function FormatEMoneyPin(value) {
  if (!value) return value;

  const formattedPin = value.replace(/[^\d]/g, '');
  const length = formattedPin.length;

  if (length < 4) return formattedPin;

  return `${formattedPin.slice(0, 4)}`;
}
