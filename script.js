document.addEventListener('DOMContentLoaded', function () {
    // Resume download button functionality
    document.getElementById('resume-download-button').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'Resume.pdf';
        link.download = 'Karthik_Kumar_Thumbeti_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
