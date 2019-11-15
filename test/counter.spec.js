import {mount} from '@vue/test-utils';
import Vue from 'vue';
import '@babel/polyfill';
import Counter from '../src/counter.vue';

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Counter);
  });

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  });

  it('button click should increment the count', async () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find({ref: 'increment'});
    button.trigger('click');
    await Vue.nextTick();
    expect(wrapper.vm.count).toBe(1);
  });

  it('decrement button click should decrement the count', async () => {
    wrapper.vm.count = 10;
    expect(wrapper.vm.count).toBe(10);
    const button = wrapper.find({ref: 'decrement'});
    button.trigger('click');
    await Vue.nextTick();
    expect(wrapper.vm.count).toBe(9);
  });

  it('count cannot go below zero', async () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find({ref: 'decrement'});
    button.trigger('click');
    await Vue.nextTick();
    expect(wrapper.vm.count).toBe(0);
  });

});
