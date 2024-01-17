const { 
    ref, 
    computed, 
    createApp,
} = Vue;

const Root = {
    template: `
        <div>
            <div>
                <h3>Ваша фамилия:</h3> 
                <input type="text" v-model="formModel.lastName">

                <h3>Ваше имя:</h3> 
                <input type="text" v-model="formModel.name">

                <h3>Ваше отчество:</h3> 
                <input type="text" v-model="formModel.middleName">
                
                <br>

                <h3>Сколько лет:</h3> 
                <input type="number" v-model="formModel.age">

                <br>

                <input type="radio" v-model="formModel.gender" value="мужчина">М
                <input type="radio" v-model="formModel.gender" value="женщина">Ж

                <br>

                <h3>Дата рождения:</h3> 
                <input type="date" v-model="formModel.date">
        
                <br>
                
            </div>

            <br>

            <button @click="onClick">
                Отправить форму
            </button>

            <br>
            <br>

            Ваше ФИО: {{ formModel.lastName }} {{ formModel.name }} {{ formModel.middleName }}
            <br>
            Вам {{ formModel.age }} лет
            <br>
            Вы {{ formModel.gender }}
            <br>
            Ваше др: {{ formModel.date }}
        </div>
    `,
    setup () {
        const formModel = ref({
            lastName: '',
            name: '',
            middleName: '',
            age: '',
            gender: '',
            date: ''
        });

        function onClick () {
            console.log(formModel.value);
        }

        return {
            formModel,
            onClick
        }
    }
};

const app = createApp(Root);

app.mount('#app');