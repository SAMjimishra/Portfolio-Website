// 404.js - place at /assets/js/404.js

// typewriter for the small description
document.addEventListener("DOMContentLoaded", function() {
    const el = document.querySelector(".type-text");
    if (!el) return;
    const text = el.textContent.trim();
    el.textContent = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 34);
        }
    }
    type();
});

// small dynamic trace logger (adds a fake timeline)
(function dynamicTrace() {
    const pre = document.getElementById("trace");
    if (!pre) return;
    const steps = [
        "Checking DNS routes...",
        "Querying CDN nodes...",
        "Cross-checking site map...",
        "Firewall logs: possible probe (IP: 103.45.12.9)",
        "SIEM: Event queued (evt_id: a3f4b2)",
        "Result: 404 Not Found — path not served"
    ];
    let idx = 0;
    setInterval(() => {
        if (idx < steps.length) {
            pre.textContent += "\n" + steps[idx];
            idx++;
        } else {
            // loop small tail once done
            pre.textContent += "\n" + "Trace complete. No further data.";
            clearInterval(this);
        }
    }, 900);
})();