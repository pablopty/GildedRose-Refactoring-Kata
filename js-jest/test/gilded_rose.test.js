const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should decrease sellIn and quality by 1", function() {
    const gildedRose = new Shop([new Item("Item", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Item");
    expect(items[0].quality).toBe(9);
    expect(items[0].sellIn).toBe(9);
  });

  it("should decrease sellIn and quality by 1", function() {
    const gildedRose = new Shop([new Item("Item", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Item");
    expect(items[0].quality).toBe(8);
  });

  it("should decrease sellIn and quality by 1", function() {
    const gildedRose = new Shop([new Item("Item", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should increase quality for Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it("should not increase quality over 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("should not change quality for Sulfuras, Hand of Ragnaros", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(10);
  });

  it("should increase quality by 2 when there are 10 days or left for Backstage passes to a TAFKAL80ETC concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });

  it("should increase quality by 3 when there are 5 days or left for Backstage passes to a TAFKAL80ETC concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });

  it("should increase quality by 3 when there are 5 days or left for Backstage passes to a TAFKAL80ETC concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should have 80 quality for Sulfuras, Hand of Ragnaros", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});
