import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

export default function ThemeSettings() {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();
  return (
    <div className="bg-half-transparent w-screen nav-item fixed top-0 right-0">
      <div className="float-right h-screen w-400 dark:text-gray-200 bg-white dark:[#484B52]">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl dark:text-gray-700">Settings</p>
          <button
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            onClick={() => setThemeSettings(false)}
            type="button"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg dark:text-gray-700">Theme options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              className="cursot-pointer"
              value="Light"
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className="ml-2 dark:text-gray-700 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              className="cursot-pointer"
              value="Dark"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 dark:text-gray-700 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg dark:text-gray-700">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                position="TopCenter"
                content={item.name}
                key={index}
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                    type="button"
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
