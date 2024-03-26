const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl');

if (!gl) {
    console.log('WebGL is not supported');
} else {
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const gpu_info = document.getElementById('gpu-info');
    if (debugInfo) {
        gpu_info.textContent = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        console.log('Renderer:', gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
        console.log('Vendor:', gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL));
    }
    else{
        const gpu_info_container = document.getElementById('gpu-info-container'); 
        gpu_info_container.hidden = true;
    }
    
    const performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
    const hardwareConcurrency = performance.hardwareConcurrency || 'N/A';
    console.log(performance);
    console.log('Hardware Concurrency:', hardwareConcurrency);
}


// Function to check if WebGL is using hardware acceleration
function isHardwareAccelerationEnabled() {
    try {
        var canvas = document.createElement('canvas');
        var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
            var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            // Check if the renderer string indicates hardware acceleration
            return renderer.toLowerCase().indexOf('swiftshader') === -1; // Example: Exclude SwiftShader software renderer
        }
    } catch (e) {
        return false;
    }
    return false;
}


// Function to detect the browser using userAgentData
function detectBrowser() {
    const browserData = navigator.userAgentData;
    
    if (browserData.brands.some(brand => brand.brand === 'Google Chrome')) {
        return "Google Chrome";
    } else if (browserData.brands.some(brand => brand.brand === 'Firefox')) {
        return "Mozilla Firefox";
    } else if (browserData.brands.some(brand => brand.brand === 'Safari')) {
        return "Safari";
    } else if (browserData.brands.some(brand => brand.brand === 'Internet Explorer')) {
        return "Internet Explorer";
    } else if (browserData.brands.some(brand => brand.brand === 'Microsoft Edge')) {
        return "Microsoft Edge";
    } else {
        return "Unknown";
    }
}


const browser = detectBrowser();
console.log("Detected browser:", browser);