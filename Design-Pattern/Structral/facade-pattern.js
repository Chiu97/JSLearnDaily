let currentId = 0;
class ComplainRegistry {
  constructor() {
    this.id = currentId++;
  }
  registerComplaint(type, user, details) {
    let register;
    let id = this.id;
    switch(type) {
      case 'product':
        register = new ProductComplains();
        break;
      case 'service':
        register = new ServiceComplains();
        break;
      default:
        break;
    }
    return register.addComplaint({id, user, details});
  }
}
class Complains {
  constructor() {
    this.complains=[];
  }
  addComplaint(complain) {
    this.complains.push(complain);
    return this.replyMessage(complain);
  }
  getComplain(id) {
    return this.complains.find(item => item.id === id);
  }
  replyMessage({id, customer, details}) {}
}

class ProductComplains extends Complains {
  constructor() {
    super();
    if(ProductComplains.exists) {
      return ProductComplains.instance;
    }
    ProductComplains.instance = this;
    ProductComplains.exists = true;
    return this;
  }
  replyMessage({id, customer, details}) {
    return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Products Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.`;
  }
}

class ServiceComplains extends Complains {
  constructor() {
    super();
    if(ServiceComplains.exists) {
      return ServiceComplains.instance;
    }
    ServiceComplains.instance = this;
    ServiceComplains.exists = true;
    return this;
  }
  replyMessage({id, customer, details}) {
    return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Service Complaint Department. The issue will be resolved or the purchase will be refunded as per terms and conditions.`;
  } 
}

let registry = new ComplainRegistry();
const reportService = registry.registerComplaint('service', 'Martha', 'availability');