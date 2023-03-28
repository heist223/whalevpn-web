var element = document.body;
element.classList.toggle("dark");

plans = [
    [
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        }
    ],
    [
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        }
    ],
    [
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        }
    ],
    [
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        }
    ],
    [
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        },
        {
            ko: 3000,
            cn: 68,
        }
    ]
]

deviceSelect = document.getElementById("select-device")
countrySelect = document.getElementById("select-country")

priceCountry1 = document.getElementById("price-country-1")
priceCountry2 = document.getElementById("price-country-2")
priceCountry3 = document.getElementById("price-country-3")
priceCountry4 = document.getElementById("price-country-4")

price1 = document.getElementById("price-1")
price2 = document.getElementById("price-2")
price3 = document.getElementById("price-3")
price4 = document.getElementById("price-4")

prices = [price1, price2, price3, price4]
priceCountries = [priceCountry1, priceCountry2, priceCountry3, priceCountry4]

function updatePrice(deviceCount, country) {
    for (let i = 0; i < plans[deviceCount].length; i++) {
        if (country == 'ko') {
            prices[i].innerHTML = plans[deviceCount][i].ko 
            priceCountries[i].innerHTML = '₩'
        } else if (country == 'cn') {
            prices[i].innerText = plans[deviceCount][i].cn
            priceCountries[i].innerHTML = '¥'
        }
    }
}

deviceSelect.addEventListener('change', function() {
    updatePrice(Number(this.value), countrySelect.value)
});

countrySelect.addEventListener('change', function() {
    updatePrice(Number(deviceSelect.value), this.value)
});

updatePrice(Number(1), 'ko')