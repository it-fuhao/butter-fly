import { defineComponent, ref, type ExtractPropTypes } from 'vue';
import { Button } from 'vant';

const buttonProps = {
  text: String,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export default defineComponent({
  name: 'BFButtonTsx',

  props: buttonProps,

  emits: ['click'],

  setup(props, { emit, slots }) {
    
    let text2 = ref<string>('');

    const renderText = () => {
      let text = slots.default ? slots.default() : props.text;
      return <span>{text}</span>;
    };

    const onClick = (event: MouseEvent) => {
      text2.value = "你点击了tsx按钮组件";
      emit('click', event);
    };

    return () => {
      return (
        <div>
          <Button
            onClick={onClick}  
          >
            {renderText()}
          </Button>
          <p>{text2.value}</p>
        </div>
      )
    }
  }
})