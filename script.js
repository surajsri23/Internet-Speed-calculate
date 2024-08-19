  document.getElementById('checkSpeed').addEventListener('click', async function() {
            const resultDiv = document.getElementById('result');
            const downloadSpeedElement = document.getElementById('downloadSpeed');
            const uploadSpeedElement = document.getElementById('uploadSpeed');
            const ipAddressElement = document.getElementById('ipAddress');
            const networkProviderElement = document.getElementById('networkProvider');

            // Simulated download and upload speeds
            const downloadSpeedMBps = (Math.random() * 10).toFixed(2);
            const uploadSpeedMBps = (Math.random() * 5).toFixed(2);

            downloadSpeedElement.textContent = downloadSpeedMBps;
            uploadSpeedElement.textContent = uploadSpeedMBps;
          
            resultDiv.classList.remove('hidden'); });
