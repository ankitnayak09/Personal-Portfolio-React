import React, { createContext, useContext, useState } from "react";

// Create the menu context
export const MenuContext = createContext();

// Create the menu provider component
export const MenuProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<MenuContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</MenuContext.Provider>
	);
};

export const useMenuContext = () => useContext(MenuContext);
