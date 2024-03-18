const output = document.querySelector('#output');


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

// Usage
if (isHardwareAccelerationEnabled()) {
    output.innerText = 'Hardware acceleration is enabled in the browser.';
    output.classList.add('bg-green-500');
} else {
    output.innerText = 'Hardware acceleration is disabled in the browser.';
    output.classList.add('bg-red-500');
}
