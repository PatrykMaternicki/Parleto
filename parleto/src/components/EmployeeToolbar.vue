<template>
  <div class="mb-4 toolbar">
    <v-toolbar>
      <v-toolbar-items>
        <v-btn class="pa-xs-2" @click="setView('EmployeeSearch')" text>Filtrowanie</v-btn>
        <v-btn class="pa-xs-2" @click="setView('EmployeeForm')" text>Dodaj Pracownika</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  methods: {
    setView(view) {
      this.$emit('setView', view);
    }
  }
}
</script>
<style>
  @media (max-width: 720px) {
    .v-toolbar__content, .v-toolbar__extension {
      padding: 4px !important;
    }

    .toolbar .v-btn:not(.v-btn--round).v-size--default {
      padding: 6px;
    }
  }
</style>