const terms = {
    "environmental": ["living planetary", "natural worldly"],
    "environment": ["living planet", "natural world"],
    "climate change": ["climate chaos", "climate breakdown"],
    "global warming": ["global overheating"],
    "biodiversity": ["wildlife"],
    "fish stock": ["wild fish population"],
    "natural resource": ["living system", "Earth's fabric"],
    "natural capital": ["nature", "living world", "living planet"],
    "ecosystem service": ["life's support system"],
    "natural infrastructure": ["nature"],
    "nature reserve": ["wildlife haven", "wildlife sanctuary", "wildlife refuge", "special wildlife area"],
    "habitat destruction": ["ecocide", "annihilation"],
    "deforestation": ["ecocide", "annihilation"],
    "biodiversity loss": ["ecocide", "annihilation"],
    "conservation": ["restoration"],
    "preservation": ["restoration"],
    "clean river": ["thriving river"],
    "clean sea": ["thriving sea"],
    "fossil fuel": ["dirty fuel"],
    "climate sceptic": ["climate science denier", "climate breaker"],
    "free-market think tank": ["covertly funded lobby group"],
    "sustainable development": ["regenerative development"]
};

const alternativeTerms = {};

Object.keys(terms).forEach(term => {
    alternativeTerms[term] = terms[term][Math.floor(Math.random() * terms[term].length)];
});

const regex = new RegExp(Object.keys(alternativeTerms).join("|"), "gi");

function replaceEnviornmentalTermsWithAlternatives() {
    const elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        for (let j = 0; j < element.childNodes.length; j++) {
            const node = element.childNodes[j];

            if (node.nodeType === 3) {
                let hasMatch = false;

                const text = node.nodeValue.replace(regex, matched => {
                    hasMatch = true;
                    return alternativeTerms[matched.toLowerCase()];
                });

                if (hasMatch) {
                    element.replaceChild(document.createTextNode(text), node);
                }
            }
        }
    }
}

replaceEnviornmentalTermsWithAlternatives();

setInterval(replaceEnviornmentalTermsWithAlternatives, 2000);
