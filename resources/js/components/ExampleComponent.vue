<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <!--<p>{{post}}</p>-->


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

       /* data() {
            return {
                post: ''
            }
        },

        created() {
            this.fetchArticle();
            this.listenForChangesArticle();
        },

        methods: {

            fetchArticle(){
                axios.get('/post').then((response) => {
                    this.post = response.data;
                })
            },
            listenForChangesArticle(){
                Echo.channel('laravel_database_chan-demo')
                    .listen('PostCreatedEvent', (e) => {
                        this.post = e.post
                    })
            }


        },
*/

        mounted() {
            /*let channel = Echo.channel('laravel_database_chan-demo');
            channel.listen('PostCreatedEvent', (e) => {
                  /!*  this.post = e.post*!/

                    console.log(e);
                })*/
        }
    }
</script>
