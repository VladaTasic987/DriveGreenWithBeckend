import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      langBar: "ENG",
      pinLegend: "Pin Legend",
      clickForMore: "Click for more",
      termsOfBusiness: "Terms of Business",
      showMore: "Show more",
      free: "Free",
      arrival: "Arrival",
      duration: "Duration",
      departure: "Departure",
      back: "Back",
      reserveCharger: "RESERVE CHARGER",
      congradulations: "Congradulations!",
      reservedCharger: "Your charger has been reserved",
      station: "Station",
      total: "Total",
      free: "Free",
      showRoute: "SHOW ROUTE",
      cancelReservation: "CANCEL RESERVATION",
      successDestination: "You have successfully arived on your destination",
      chargerReady: "Your charger is ready",
      startCharging: "START CHARGING",
      cancelReservation: "CANCEL RESERVATION",
      chargingInProgress: "Charging in progress",
      carReady: "Your car will be fully charged soon",
      cancelCharging: "CANCEL CHARGING",
      chargingSucessful: "Charging is sucessfuly finished",
      rateTheStation: "RATE THE STATION",
      exit: "EXIT",
    }
  },
  sr: {
    translation: {
      langBar: "SR",
      pinLegend: "Legenda pinova",
      clickForMore: "Klikni za više",
      termsOfBusiness: "Uslovi poslovanja",
      showMore: "Prikaži više",
      free: "Besplatno",
      arrival: "Dolazak",
      duration: "Trajanje",
      departure: "Odlazak",
      back: "Nazad",
      reserveCharger: "REZERVIŠI PUNJAČ",
      congradulations: "Čestitamo!",
      reservedCharger: "Vaš punjač je rezervisan",
      station: "Stanica",
      total: "Ukupno",
      free: "Besplatno",
      showRoute: "PRIKAŽI RUTU",
      cancelReservation: "OTKAŽI REZERVACIJU",
      successDestination: "Uspešno ste stigli na vašu destinaciju",
      chargerReady: "Vaš punjač je spreman",
      startCharging: "ZAPOČNI PUNJENJE",
      cancelReservation: "OTKAŽI REZERVACIJU",
      chargingInProgress: "Punjenje je u toku",
      carReady: "Vaš auto će ekoro biti spreman",
      cancelCharging: "OTKAŽI PUNJENJE",
      chargingSucessful: "Punjenje je uspešno završeno",
      rateTheStation: "OCENI STANICU",
      exit: "IZAĐI"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;