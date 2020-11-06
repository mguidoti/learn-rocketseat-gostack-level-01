import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com Dispositivo: IP da máquina (no windows, ipconfig no cmd)
 * Android com Emulador: localhost, precisamos:
 *    use: adb reverse tcp:3333 tcp:3333
 * Android com Emulador: sem localhost, 
 *    use: 10.0.2.2 (Android Studio)
 *    use: 10.0.3.2 (Genymotion)
 * Android com Dispositivo: IP da máquina
 */