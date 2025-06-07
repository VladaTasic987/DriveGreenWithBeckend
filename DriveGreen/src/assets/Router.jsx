import { Routes, Route } from 'react-router-dom';

import { Wellcome } from './LoginComponents/Wellcome';
import { Login } from './LoginComponents/Login';
import { Register } from './LoginComponents/Register';
import { ForgotPasswordEmail } from './LoginComponents/ForgotPasswordEmail';
import { RegisterPartner } from './LoginComponents/RegisterPartner';
import { ForgotCodePassword } from './LoginComponents/ForgotCodePassword';
import { MapStart } from './MapComponents/MapStart';
import { ViewMoreCard } from './MapComponents/ViewMoreCard';
import { ReservedCharger } from './MapComponents/ReservedCharger';
import { SuccessfulDestination } from './MapComponents/SuccessfulDestination';
import { ChargingProgress } from './MapComponents/ChargingProgress';
import { CongradulationsCharging } from './MapComponents/CongradulationsCharging';
import { BusinessConditions } from './MapComponents/BusinessConditions';
import { MapPinsLegend } from './MapComponents/MapPinsLegend';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Wellcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<ForgotPasswordEmail />} />
      <Route path="/registerPartner" element={<RegisterPartner />} />
      <Route path="/passwordCode" element={<ForgotCodePassword />} />
      <Route path="/mapStart" element={<MapStart />} />
      <Route path="/viewMore" element={<ViewMoreCard />} />
      <Route path="/reservedCharger" element={<ReservedCharger />} />
      <Route path="/successfulDestination" element={<SuccessfulDestination />} />
      <Route path="/chargingProgress" element={<ChargingProgress />} />
      <Route path="/congradulationsCharging" element={<CongradulationsCharging />} />
      <Route path="/businessConditions" element={<BusinessConditions />} />
      <Route path="/pinsLegend" element={<MapPinsLegend />} />
    </Routes>
  );
};