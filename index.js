function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  const rubina = new Scooter(2024, "red", "isuzu");
  rubina.model; //=> "isuzu"

  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  const mohammad = new Driver(Bakari, 30, 10);
  mohammad.age; //=> "30"  
  
  
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
    
  }
  const village = new PickupLocation(embakasi, nairobi)
  village.address; //=> "embakasi"
