import { defineComponent, h, type ExtractPropTypes } from 'vue';

const buttonProps = {
  text: String,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export default defineComponent({
  name: 'BFButtonTsx',

  props: buttonProps,

  emits: ['click'],

  setup(props, { emit, slots }) {

    const renderText = () => {
      let text = slots.default ? slots.default() : props.text;
      return <span>{text}</span>;
    };

    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return () => {
      return (
        <p
          onClick={onClick}  
        >
          {renderText()}
        </p>
      )
    }
  }
})