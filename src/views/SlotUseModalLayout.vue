<template>
    <SlotModalLayout>
        <template v-slot:header>
            <h1>팝업 타이틀</h1>
        </template>
        <template v-slot:main>
            <p>팝업 컨텐츠 1</p>
            <p>팝업 컨텐츠 2</p>
        </template>
        <template v-slot:default>
            <p>팝업 default</p>
        </template>
        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </SlotModalLayout>
</template>

<script>
import SlotModalLayout from './SlotModalLayout'

export default {
    components: {SlotModalLayout}
}
</script>
