const socialLinks =
    {
        'twitter': 'https://twitter.com/Pushkar_Anand_0',
        'github': 'https://github.com/pushkar-anand',
        'linkedin': 'https://www.linkedin.com/in/anandpushkar088',
        'stack-overflow': 'https://stackoverflow.com/users/4257791/pushkar',
        'quora': 'https://www.quora.com/profile/Pushkar-Anand-14',
        'instagram': 'https://instagram.com/pushkar.anand',
        'facebook': 'https://www.facebook.com/anandpushkar088',

    };

let html = '';

for (let key in socialLinks) {
    if (socialLinks.hasOwnProperty(key)) {
            let link = '<a target="_blank" rel="noopener nofollow external" class="social-icon" href="' + socialLinks[key] + '" title="'+ key +'" >' +
                '<i class="fab fa-'+ key + '"></i></a>';
            console.log(link);
            html += link;
    }
}
console.log(html);
$('#social').html(html);