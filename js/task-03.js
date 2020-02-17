console.log('Задание 3');

class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        console.table(this.items);
    }

    addItem(item) {
        this.items.push(item);
        console.table(this.items);
    }

    removeItem(item) {
        for (let i = 0; i < this.items.length; i += 1) {
            if (this.items[i] === item) {
                this.items.splice(i, 1);
                console.table(this.items);
            }
        }
    }

}


const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]