import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';

import { useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Select } from 'src/ui/select';
import { Text } from 'src/ui/text';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

interface Props {
	params: ArticleStateType;
	handleClick: (data: ArticleStateType) => void;
}

export const ArticleParamsForm = ({ params, handleClick }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [articleParams, setState] = useState<ArticleStateType>(params);

	const asideClass = isOpen
		? styles.container + ' ' + styles.container_open
		: styles.container;

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside className={asideClass}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						handleClick(articleParams);
					}}>
					<Text size={31} uppercase weight={800}>
						{'Задайте параметры'}
					</Text>

					<Select
						selected={articleParams.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected) => {
							setState({ ...articleParams, fontFamilyOption: selected });
						}}
						title='Шрифт'
					/>

					<RadioGroup
						name={''}
						selected={articleParams.fontSizeOption}
						options={fontSizeOptions}
						onChange={(selected) => {
							setState({ ...articleParams, fontSizeOption: selected });
						}}
						title={'Размер шрифта'}
					/>

					<Select
						selected={articleParams.fontColor}
						options={fontColors}
						onChange={(selected) => {
							setState({ ...articleParams, fontColor: selected });
						}}
						title='Цвет шрифта'
					/>

					<Separator />

					<Select
						selected={articleParams.backgroundColor}
						options={backgroundColors}
						onChange={(selected) => {
							setState({ ...articleParams, backgroundColor: selected });
						}}
						title='Цвет фона'
					/>

					<Select
						selected={articleParams.contentWidth}
						options={contentWidthArr}
						onChange={(selected) => {
							setState({ ...articleParams, contentWidth: selected });
						}}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => {
								setState(defaultArticleState);
								handleClick(defaultArticleState);
							}}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
