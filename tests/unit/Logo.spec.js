import { mount } from "@vue/test-utils";
import Logo from "@/components/Logo.vue";

describe("Logo.vue", () => {
  it("renders h1 text", () => {
    const wrapper = mount(Logo);
    expect(wrapper.text()).toMatch("ToDo List");
  });
});
