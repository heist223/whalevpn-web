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

price1 = document.getElementById("price-1")
price2 = document.getElementById("price-2")
price3 = document.getElementById("price-3")
price4 = document.getElementById("price-4")
price5 = document.getElementById("price-5")

prices = [price1, price2, price3, price4, price5]

function updatePrice(deviceCount, country) {
    for (let i = 0; i < plans[deviceCount].length; i++) {
        if (country == 'ko') {
            prices[i].innerHTML = plans[deviceCount][i].ko + '원'
        } else if (country == 'cn') {
            prices[i].innerText = plans[deviceCount][i].cn + '위안'
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