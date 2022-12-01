import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

const changePenColor = (args) => {
  document.getElementById('preview').style.backgroundColor =
    args.currentValue.hex;
};

export default function ColorPicker() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p10 rounded-3xl bg-white">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center flex-wrap gap-20">
          <div>
            <p className="text-2xl font-semibold mb-4 mt-2">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="pallete"
              modeSwitcher={false}
              showButtons={false}
              inline
              change={changePenColor}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mb-4 mt-2">Inline Picker</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              showButtons={false}
              inline
              change={changePenColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
