const { createApp, ref } = Vue;

// tempate -- тело
// setup -- настройки js

const app = createApp({
    template: `
        <button @click="onClick">
            +
        </button>

        <div v-show="isVisible">hfjdk</div>
    `,
    setup () {
        const isVisible = ref(false);

        function onClick () {
            isVisible.value = !isVisible.value;
        }

        return {
            isVisible,
            onClick
        }
    }
});

app.mount('#app');