<script>
export default {
    data(){
        return{
            foo: 1232,
        }
    },
    mounted(){
        console.log('ref', this.$refs.animationItem.childNodes);
        let elements = [];
        // if(this.$refs.animationItem[0] == undefined){
        //     console.log('array');
        //     elements = [this.$refs.animationItem]
        // } else{
        //     elements = this.$refs.animationItem
        // }
        [...this.$refs.animationItem.childNodes].forEach(el => {
            if(el.classList){
                elements.push(el)
            }
        })
        console.log('elements', elements);


            elements.forEach(element => {
                console.log('foo sdafsd', this.$refs.animationItem, element)
                    element.classList.add('animation__hide')
                    setTimeout(() => {
                        element.classList.add('animation__transition')
                    }, 50)

                
            })

            const callback = (() => {
                if(elements[0].getBoundingClientRect().top - window.innerHeight < -300) {
                    elements.forEach((element, idx) => {
                        setTimeout(() => {
                            element.classList.remove('animation__hide')
                        }, 100 + idx*120)
                    })
                    window.removeEventListener("scroll", callback)
                }
            })
            window.addEventListener("scroll", callback)
    },
}
</script>
<style lang="scss">
    .animation{
        &__hide{
            opacity: 0;
            transform: translateY(30px);
        }
        &__transition{
            transition: .5s;
        }
    }
</style>