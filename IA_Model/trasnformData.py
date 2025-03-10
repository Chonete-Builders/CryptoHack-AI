# pip install pandas pyarrow

import pandas as pd

# Define your dataset as a list of dictionaries
data = [
    {
        "conversations": [
            {"from": "human", "value": "How much does a bag of rice cost in Costa Rica?"},
            {"from": "gpt", "value": "A bag of rice of 1800 g is usually 1,680 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a gallon of milk cost in Costa Rica?"},
            {"from": "gpt", "value": "A gallon of milk is usually 2,640 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a bag of black beans cost in Costa Rica?"},
            {"from": "gpt", "value": "A bag of 800g black beans is usually 1,290 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a bag of red beans cost in Costa Rica?"},
            {"from": "gpt", "value": "A bag of 800g red beans is usually 1,480 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a can of sweet corn cost in Costa Rica?"},
            {"from": "gpt", "value": "A can of sweet corn of 149g is usually 1,680 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a loaf of bread cost in Costa Rica?"},
            {"from": "gpt", "value": "A loaf of bread is usually 1,200 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a dozen eggs cost in Costa Rica?"},
            {"from": "gpt", "value": "A dozen eggs is usually 2,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of chicken breast cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of chicken breast is usually 4,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of beef cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of beef is usually 6,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of pork cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of pork is usually 5,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of fish cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of fish is usually 7,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of potatoes cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of potatoes is usually 1,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of onions cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of onions is usually 1,200 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of tomatoes cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of tomatoes is usually 1,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of carrots cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of carrots is usually 1,300 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of bananas cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of bananas is usually 800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of apples cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of apples is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of oranges cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of oranges is usually 1,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of lemons cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of lemons is usually 2,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of pineapples cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of pineapples is usually 1,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of watermelons cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of watermelons is usually 1,200 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of avocados cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of avocados is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of strawberries cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of strawberries is usually 4,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of grapes cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of grapes is usually 5,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of mangoes cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of mangoes is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of papayas cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of papayas is usually 1,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of limes cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of limes is usually 2,200 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cucumbers cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cucumbers is usually 1,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of bell peppers cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of bell peppers is usually 2,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of lettuce cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of lettuce is usually 1,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cabbage cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cabbage is usually 1,200 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of zucchini cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of zucchini is usually 1,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of eggplant cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of eggplant is usually 2,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of broccoli cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of broccoli is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cauliflower cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cauliflower is usually 2,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of spinach cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of spinach is usually 2,200 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of kale cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of kale is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of celery cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of celery is usually 1,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of green beans cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of green beans is usually 2,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of peas cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of peas is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of corn on the cob cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of corn on the cob is usually 1,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of sweet potatoes cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of sweet potatoes is usually 1,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of yams cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of yams is usually 2,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of plantains cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of plantains is usually 1,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cassava cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cassava is usually 1,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of taro cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of taro is usually 2,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of ginger cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of ginger is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of garlic cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of garlic is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of shallots cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of shallots is usually 2,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of leeks cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of leeks is usually 2,200 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of mushrooms cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of mushrooms is usually 3,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of tofu cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of tofu is usually 4,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of tempeh cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of tempeh is usually 4,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of seitan cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of seitan is usually 5,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of quinoa cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of quinoa is usually 6,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of oats cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of oats is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of barley cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of barley is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of lentils cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of lentils is usually 2,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of chickpeas cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of chickpeas is usually 3,200 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of almonds cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of almonds is usually 8,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of walnuts cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of walnuts is usually 9,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cashews cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cashews is usually 10,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of peanuts cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of peanuts is usually 4,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of sunflower seeds cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of sunflower seeds is usually 3,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of pumpkin seeds cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of pumpkin seeds is usually 4,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of flaxseeds cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of flaxseeds is usually 5,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of chia seeds cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of chia seeds is usually 6,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of sesame seeds cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of sesame seeds is usually 4,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of coconut oil cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of coconut oil is usually 7,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of olive oil cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of olive oil is usually 10,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of butter cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of butter is usually 8,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cheese cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cheese is usually 9,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of yogurt cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of yogurt is usually 5,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of sour cream cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of sour cream is usually 6,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cream cheese cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cream cheese is usually 7,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of ice cream cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of ice cream is usually 8,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of chocolate cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of chocolate is usually 10,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of sugar cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of sugar is usually 1,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of salt cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of salt is usually 1,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of pepper cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of pepper is usually 2,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cinnamon cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cinnamon is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cumin cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cumin is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of paprika cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of paprika is usually 2,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of turmeric cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of turmeric is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of oregano cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of oregano is usually 2,200 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of basil cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of basil is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of thyme cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of thyme is usually 2,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rosemary cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rosemary is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of parsley cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of parsley is usually 2,200 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cilantro cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cilantro is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of dill cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of dill is usually 2,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of mint cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of mint is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of chives cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of chives is usually 2,200 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of sage cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of sage is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of bay leaves cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of bay leaves is usually 2,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of nutmeg cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of nutmeg is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cloves cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cloves is usually 3,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cardamom cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cardamom is usually 4,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of coriander cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of coriander is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of fennel cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of fennel is usually 2,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of mustard seeds cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of mustard seeds is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of fenugreek cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of fenugreek is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of saffron cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of saffron is usually 50,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of vanilla beans cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of vanilla beans is usually 40,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cocoa powder cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cocoa powder is usually 5,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of baking powder cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of baking powder is usually 2,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of baking soda cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of baking soda is usually 1,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of yeast cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of yeast is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of cornstarch cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of cornstarch is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of flour cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of flour is usually 1,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of pasta cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of pasta is usually 2,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice noodles cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice noodles is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of soba noodles cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of soba noodles is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of udon noodles cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of udon noodles is usually 3,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of ramen noodles cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of ramen noodles is usually 2,800 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice paper cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice paper is usually 4,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice vermicelli cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice vermicelli is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice sticks cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice sticks is usually 2,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice cakes cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice cakes is usually 3,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice flour cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice flour is usually 2,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice bran cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice bran is usually 1,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice syrup cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice syrup is usually 4,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice vinegar cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice vinegar is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice wine cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice wine is usually 5,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice milk cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice milk is usually 4,500 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    },
    {
        "conversations": [
            {"from": "human", "value": "How much does a kilogram of rice cereal cost in Costa Rica?"},
            {"from": "gpt", "value": "A kilogram of rice cereal is usually 3,000 colones."}
        ],
        "source": "grocery_query",
        "score": 0.9
    }
]

# # Convert to a DataFrame
# df = pd.DataFrame(data)

# # Save as a Parquet file
# df.to_parquet("custom_finetome.parquet", engine="pyarrow")

# print("Dataset saved as 'custom_finetome.parquet'")



# Load and inspect the dataset
df = pd.read_parquet("custom_finetome.parquet", engine="pyarrow")
print(df)