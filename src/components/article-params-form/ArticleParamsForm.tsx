import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
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
import clsx from 'clsx';
import { useOutsideClickClose } from './hooks/useOutsideClickClose';

interface Props {
	setArticleParams: (data: ArticleStateType) => void;
}

export const ArticleParamsForm = ({ setArticleParams }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [articleFormParams, setArticleFormParams] =
		useState<ArticleStateType>(defaultArticleState);
	const rootRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen,
		rootRef,
		onClick: setIsOpen,
	});

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}
				ref={rootRef}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						setArticleParams(articleFormParams);
					}}>
					<Text size={31} uppercase weight={800}>
						{'Задайте параметры'}
					</Text>

					<Select
						selected={articleFormParams.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected) => {
							setArticleFormParams({
								...articleFormParams,
								fontFamilyOption: selected,
							});
						}}
						title='Шрифт'
					/>

					<RadioGroup
						name={''}
						selected={articleFormParams.fontSizeOption}
						options={fontSizeOptions}
						onChange={(selected) => {
							setArticleFormParams({
								...articleFormParams,
								fontSizeOption: selected,
							});
						}}
						title={'Размер шрифта'}
					/>

					<Select
						selected={articleFormParams.fontColor}
						options={fontColors}
						onChange={(selected) => {
							setArticleFormParams({
								...articleFormParams,
								fontColor: selected,
							});
						}}
						title='Цвет шрифта'
					/>

					<Separator />

					<Select
						selected={articleFormParams.backgroundColor}
						options={backgroundColors}
						onChange={(selected) => {
							setArticleFormParams({
								...articleFormParams,
								backgroundColor: selected,
							});
						}}
						title='Цвет фона'
					/>

					<Select
						selected={articleFormParams.contentWidth}
						options={contentWidthArr}
						onChange={(selected) => {
							setArticleFormParams({
								...articleFormParams,
								contentWidth: selected,
							});
						}}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => {
								setArticleFormParams(defaultArticleState);
								setArticleParams(defaultArticleState);
							}}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
