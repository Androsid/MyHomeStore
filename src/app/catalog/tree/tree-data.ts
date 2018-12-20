import { ITreeviewComponent } from './tree.component';

export const treesConst: ITreeviewComponent[] = [
    {
        "leaf": true,
        "categoryName": "Одежда, обувь, аксессуары",
        "trees":
            [{
                "leaf": true,
                "categoryName": "Женская одежда",
                "trees": [
                    {
                        "leaf": true,
                        "categoryName": "Верхняя",
                        "trees": [
                            {
                                "leaf": false,
                                "categoryName": "Плащи, тренчи",
                                "categoryId": "1",
                                "trees": []
                            }
                        ]
                    },
                    {
                        "leaf": false,
                        "categoryName": "Одежда для спорта и танцев",
                        "trees": []
                    }
                ]
            }]
    },
    {
        "leaf": true,
        "categoryName": "Спортивные товары",
        "trees":
            [{
                "leaf": true,
                "categoryName": "Зимние товары",
                "trees":
                    [{
                        "leaf": false,
                        "categoryName": "Санки",
                        "categoryId": "2",
                        "trees": []
                    },
                    {
                        "leaf": false,
                        "categoryName": "Лыжи",
                        "categoryId": "3",
                        "trees": []
                    },
                    {
                        "leaf": false,
                        "categoryName": "Коньки",
                        "trees": []
                    }]
            },
            {
                "leaf": true,
                "categoryName": "Летние товары",
                "trees":
                    [{
                        "leaf": false,
                        "categoryName": "Велосипеды",
                        "trees": []
                    },
                    {
                        "leaf": false,
                        "categoryName": "Самокаты",
                        "trees": []
                    }]
            }]
    }
];