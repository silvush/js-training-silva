class Car {
    #make;
  #model;
  #year;

  constructor(make, model, year = 2025) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    get make() {
        return this.#make;
      }
    
      set make(value) {
        if (typeof value === 'string' && value.trim() !== '') {
          this.#make = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
          throw new Error("Make must be a non-empty string.");
        }
      }
    
      get model() {
        return this.#model;
      }
    
      set model(value) {
        if (typeof value === 'string' && value.trim() !== '') {
          this.#model = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
          throw new Error("Model must be a non-empty string.");
        }
      }
    
      get year() {
        return this.#year;
      }
    
      set year(value) {
        if (typeof value === 'number' && value >= 1886) {
          this.#year = value;
        } else {
          this.#year = 2025;
        }
      }
    
      
      #checkServiceStatus() {
        console.log("Service status: OK");
      }
    
    
      static vehicleType() {
        return "Car";
      }
    
   
      displayDetails() {
        return `This is a car model ${this.model} of the year ${this.year}.`;
      }
    }
    

    class ElectricCar extends Car {
      #batteryCapacity;
      #electricRange;
      #chargingTime;
    
      constructor(make, model, year, batteryCapacity = 50, electricRange = 350, chargingTime = 8) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity;
        this.electricRange = electricRange;
        this.chargingTime = chargingTime;
      }
    
     
      get batteryCapacity() {
        return this.#batteryCapacity;
      }
    
      set batteryCapacity(value) {
        this.#batteryCapacity = value;
      }
    
      get electricRange() {
        return this.#electricRange;
      }
    
      set electricRange(value) {
        this.#electricRange = value;
      }
    
      get chargingTime() {
        return this.#chargingTime;
      }
    
      set chargingTime(value) {
        this.#chargingTime = value;
      }
    
      chargeBattery() {
        console.log("Charging the battery...");
      }
    
   
      displayDetails() {
        return `This is an Electric Car model ${this.model} of the year ${this.year}, with a ${this.batteryCapacity} kWh battery, ${this.electricRange} km range, and charging time of ${this.chargingTime} hours.`;
      }
    
      static isEcoFriendly() {
        return true;
      }
    }
    
  
    class GasCar extends Car {
      #fuelCapacity;
      #fuelEfficiency;
      #emissions;
    
      constructor(make, model, year, fuelCapacity = 50, fuelEfficiency = 15, emissions = 120) {
        super(make, model, year);
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
        this.emissions = emissions;
      }
    
  
      get fuelCapacity() {
        return this.#fuelCapacity;
      }
    
      set fuelCapacity(value) {
        this.#fuelCapacity = value;
      }
    
      get fuelEfficiency() {
        return this.#fuelEfficiency;
      }
    
      set fuelEfficiency(value) {
        this.#fuelEfficiency = value;
      }
    
      get emissions() {
        return this.#emissions;
      }
    
      set emissions(value) {
        this.#emissions = value;
      }
    
      refuel() {
        console.log("Refueling the car...");
      }
    
      
      displayDetails() {
        return `This is a Gas Car model ${this.model} of the year ${this.year}, with a ${this.fuelCapacity}L fuel tank, ${this.fuelEfficiency} km/L efficiency, and ${this.emissions} g/km CO2 emissions.`;
      }
    
      static isEcoFriendly() {
        return false;
      }
    }
    
   
    const tesla = new ElectricCar("tesla", "model s", 2023);
    console.log(tesla.displayDetails());
    tesla.chargeBattery();
    console.log(ElectricCar.isEcoFriendly());
    
    const toyota = new GasCar("toyota", "corolla", 2020);
    console.log(toyota.displayDetails());
    toyota.refuel();
    console.log(GasCar.isEcoFriendly());
    