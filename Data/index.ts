export type MenuData = {
    category_title: string;
    items: {
        item_id: number;
        item_title: string;
        item_price: number;
        item_desc?: string;
    }[];
};


export const menutext: MenuData[] = [
    {

        category_title: "CHICKEN SANDWICH",
        items: [
            {
                item_id: 1,
                item_title: "Classic Chicken Sandwich",
                item_price: 9.00,
                item_desc: "Im a dish description.",
            },
            {
                item_id: 2,
                item_title: "Mega Chicken Sandwich",
                item_price: 12.00,
                item_desc: "Im a dish description.",
            },
        ]
    },
    {
        category_title: "SPECIAL OFFERS",
        items: [
            {
                item_id: 3,
                item_title: "Da Crust Combo",
                item_price: 19.99,
                item_desc: "Im a dish description.",
            },
            {
                item_id: 4,
                item_title: "Family Meal",
                item_price: 19.99,
                item_desc: "Im a dish description.",
            }
        ]  
    },
    {
        
        category_title: "TENDERS",
        items: [
            {
                item_id: 5,
                item_title: "Chicken Tenders - 6pcs",
                item_price: 9.00,
                item_desc: "Im a dish description.",
            },
            {
                item_id: 6,
                item_title: "Chicken Tenders - 9pcs",
                item_price: 12.00,
                item_desc: "Im a dish description.",
            }
        ]
        
    },
    {

        category_title: "SIDES",
        items:[
            {
                item_id:7,
                item_title:"French Fries",
                item_price: 4.00,
                item_desc:"",
            },
            {
                item_id:8,
                item_title:"Mac & Cheese",
                item_price: 4.00,
                item_desc:"",
            },
            {
                item_id:9,
                item_title:"Coleslaw",
                item_price: 4.00,
                item_desc:"",
            },
            {
                item_id:10,
                item_title:"Mix Greens",
                item_price: 4.00,
                item_desc:"",
            },
        ]
    },
    {
        category_title:"WINGS",
        items:[
            {
                item_id:11,
                item_title:"Hot & Spicy Wings - 6pcs",
                item_price: 9.00,
                item_desc:"Im a dish description.",
            },
            {
                item_id:12,
                item_title:"Hot & Spicy Wings - 9pcs",
                item_price: 12.00,
                item_desc:"Im a dish description.",
            },
        ]
    },
    {
        category_title:"DESSERTS",
        items:[
            {
                item_id:13,
                item_title:"★ Bubble Waffle",
                item_price: 4.00,
                item_desc:"",
            },
            {
                item_id:14,
                item_title:"Milkshake",
                item_price: 4.00,
                item_desc:"",
            },
        ]
    },
]