<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>
      <b>First Name:</b>
      <input type="text" v-model="newContact.first_name" />
    </p>
    <p>
      <b>Last Name:</b>
      <input type="text" v-model="newContact.last_name" />
    </p>
    <p>
      <b>Email:</b>
      <input type="text" v-model="newContact.email" />
    </p>
    <p>
      <b>Phone Number:</b>
      <input type="text" v-model="newContact.phone_number" />
    </p>
    <p>
      <b>Image:</b>
      <input type="text" v-model="newContact.image" />
    </p>
    <button v-on:click="createContact">Create Contact</button>
    <div v-for="contact in contacts" :key="contact.id">
      <p>
        <b>Id:</b>
        {{ contact.id }}
      </p>
      <p>
        <b>Name:</b>
        {{ contact.first_name }} {{ contact.last_name }}
      </p>
      <hr />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      contacts: [],
      newContact: {},
    };
  },
  created: function () {
    this.indexContacts();
  },
  methods: {
    indexContacts: function () {
      console.log("Loading Contacts!");
      axios.get("http://localhost:3000/contacts").then((response) => {
        console.log(response.data);
        this.contacts = response.data;
      });
    },
    createContact: function () {
      console.log("Create Contact!");
      console.log(this.newContact);
      axios
        .post("http://localhost:3000/contacts.json", {
          first_name: this.newContact.first_name,
          last_name: this.newContact.last_name,
          email: this.newContact.email,
          phone_number: this.newContact.phone_number,
          image: this.newContactimage,
        })
        .then((response) => {
          console.log(response.data);
        });
    },
  },
};
</script>
