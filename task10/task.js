function extractDomainName(url) {
    // Create a new URL object from the input URL string
    const parsedUrl = new URL(url);
    
    // Extract the hostname (domain) part
    let domain = parsedUrl.hostname;
    
    // Remove 'www.' if present
    if (domain.startsWith('www.')) {
        domain = domain.slice(4);
    }
    
    // Extract the part of the domain before the first dot
    const domainName = domain.split('.')[0];
    
    return domainName;
}

// Example usage
const task1 = "http://github.com/carbonfive/raygun";
const task2 = "http://www.zombie-bites.com";
const task3 = "https://www.cnet.com";

console.log(extractDomainName(task1));  // Output: github
console.log(extractDomainName(task2));  // Output: zombie-bites
console.log(extractDomainName(task3));  // Output: cnet
