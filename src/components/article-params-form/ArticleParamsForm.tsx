import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';

import { useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Select } from 'src/ui/select';
import { Text } from 'src/ui/text';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const asideClass = isOpen
		? styles.container + ' ' + styles.container_open
		: styles.container;

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside className={asideClass}>
				<form className={styles.form}>
					<Text size={31} uppercase weight={800}>
						{'Задайте параметры'}
					</Text>

					<Select selected={null} options={fontFamilyOptions} title='Шрифт' />

					<RadioGroup
						name={''}
						options={fontSizeOptions}
						selected={{
							title: '',
							value: '',
							className: '',
							optionClassName: undefined,
						}}
						title={'Размер шрифта'}
					/>

					<Select selected={null} options={fontColors} title='Цвет шрифта' />

					<Separator />

					<Select
						selected={null}
						options={backgroundColors}
						title='Цвет фона'
					/>

					<Select
						selected={null}
						options={contentWidthArr}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
