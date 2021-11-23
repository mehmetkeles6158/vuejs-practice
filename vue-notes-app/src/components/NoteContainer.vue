<template>
  <div class="note-container">
    <NoteSelectors v-bind:notes="notes" v-bind:selectedNoteId="selectedNoteId" v-on:selectNote="selectNote" />
    <NoteEditor />
  </div>
</template>

<script>
import NoteSelectors from "./NoteSelectors.vue";
import NoteEditor from "./NoteEditor.vue";
export default {
  props: ["notes", "selectedNoteId"],
  methods: {
    selectNote: function (note) {
      this.$emit("selectNote", note);
    },
  },
  components: {
    NoteSelectors,
    NoteEditor,
  },
};
</script>
