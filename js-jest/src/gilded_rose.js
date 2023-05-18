class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    const isAgedBrie = (index) => this.items[index].name == 'Aged Brie';
    const isBackStage = (index) => this.items[index].name == 'Backstage passes to a TAFKAL80ETC concert';
    const isSulfuras = (index) => this.items[index].name == 'Sulfuras, Hand of Ragnaros';
    const changeQuality = (index, quantity) => this.items[index].quality += quantity;
    const hasQuality = (index, margin = 0) => this.items[index].quality - margin > 0;
    const isMaxQuality = (index, margin = 0) => this.items[index].quality + margin >= 50
    const isNormalItem = (index) => !isAgedBrie(index) && !isBackStage(index) && !isSulfuras(index);
    const isDated = (index) => this.items[index].sellIn < 0;
    
    for (let i = 0; i < this.items.length; i++) {
      if (isNormalItem(i)) {
        if (isDated(i) && hasQuality(i, 1)) {
          changeQuality(i, -2)
        } else if (hasQuality(i, 1)) {
          changeQuality(i, -1)
        }
      }

      if (isBackStage(i)) {
        if (isDated(i)) {
          this.items[i].quality = 0;
        } else if (this.items[i].sellIn < 6 && !isMaxQuality(i, 2)) {
          changeQuality(i, 3)
        } else if (this.items[i].sellIn < 11 && !isMaxQuality(i, 1)) {
          changeQuality(i, 2)
        } else if (!isMaxQuality(i)) {
          changeQuality(i, 1)
        }
      }

      if (isAgedBrie(i)) {
        if (!isMaxQuality(i)) {
          changeQuality(i, 1)
        } else if (isDated(i) && !isMaxQuality(i, 1)) {
          changeQuality(i, 2)
        }
      }

      if (!isSulfuras(i)) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
