import {Bicicletta} from './app/shared/models/Bicicletta';

export const sample_bici: Bicicletta[] = [
    {
        id: '1',
        name: 'Mountain Bike',
        type: 'Mountain',
        brand: 'Trek',
        image: 'assets/images/mBike1.jpg',
        desc: 'A high-performance mountain bike designed for rough terrains.',
        price: 1500,
        favourite: false
    },
    {
        id: '2',
        name: 'Road Bike',
        type: 'Road',
        brand: 'Specialized',
        image: 'assets/images/rBike1.jpg',
        desc: 'A lightweight road bike perfect for long-distance rides.',
        price: 2000,
        favourite: false
    },
    {
        id: '3',
        name: 'Hybrid Bike',
        type: 'Hybrid',
        brand: 'Giant',
        image: 'assets/images/mBike3.jpg',
        desc: 'A versatile hybrid bike suitable for both city commutes and light trails.',
        price: 1200,
        favourite: false
    },
    {
        id: '4',
        name: 'Electric Bike',
        type: 'Electric',
        brand: 'Rad Power Bikes',
        image: 'assets/images/cBike1.jpg',
        desc: 'An eco-friendly electric bike with pedal assist for effortless riding.',
        price: 2500,
        favourite: false
    },
    {
        id: '5',
        name: 'BMX Bike',
        type: 'BMX',
        brand: 'Mongoose',
        image: 'assets/images/mBike2.jpg',
        desc: 'A sturdy BMX bike suitable for tricks and jumps in the skatepark.',
        price: 500,
        favourite: false
    }
]