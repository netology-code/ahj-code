class API {
  constructor(url) {
    this.url = url;
    this.contentTypeHeader = {'Content-Type': 'application/json'};
  }

  load() {
    return fetch(this.url);
  }

  add(contact) {
    return fetch(this.url, {
      body: JSON.stringify(contact),
      method: 'POST',
      headers: this.contentTypeHeader,
    });
  }

  remove(id) {
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    });
  }
}

(async() => {
  const api = new API('http://localhost:7070/contacts');
  {
    const response = await api.load();
    const data = await response.json();
    console.log(data);
  }
  {
    const response = await api.add({name: 'Ivan', phone: '+79........'});
  }
  {
    const response = await api.load();
    const data = await response.json();
    console.log(data);
  }
})();
