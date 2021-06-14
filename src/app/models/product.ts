export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, imageUrl = 'https://www.onlygfx.com/wp-content/uploads/2018/04/no-stamp-1.png') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
