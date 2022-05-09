//
//
//   return (
//     <div>
//       <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
//         {!isMobile && (
//           <div className={styles.title_wrap}>
//             <p className={styles.title}>Watchlist</p>
//             <button onClick={onBack} className={styles.arrow_wrap}>
//               <img src={arrowBack} alt='back' />
//             </button>
//           </div>
//         )}
//         {isMobile && (
//           <div className={styles.header_small}>
//             <div className={styles.title_wrap_mobile}>
//               <FontIcon className={styles.icon} name={FontIconName.Fire} />
//               <p className={styles.title_small}>Hot assets</p>
//             </div>
//
//             <MobileViewMode mode={viewMode} modeSelect={setViewMode} />
//           </div>
//         )}
//
//         <div className={isMobile ? styles.mobile_select : styles.select}>
//           <TextInput
//             left={<FontIcon size={14}  className={styles.iconSearch} name={FontIconName.Search} />}
//             type={'text'}
//             placeholder={'Search'}
//             className={styles.input}
//           />
//           <Button className={styles.price}>
//             <FontIcon  size={17} className={styles.iconBinocular} name={FontIconName.Binocular} />
//             PRICE ALERT</Button>
//         </div>
//         <div>
//
//         </div>
//         <div className={viewMode === ViewMode.Grid ? styles.gird_card_wrap : styles.card_wrap}>
//           {cardItems.map((item) => (
//             <WatchlistCard
//               type={viewMode === ViewMode.Grid ? 'small' : 'normal'}
//               key={item.key}
//               className={styles.card}
//               icon={item.icon}
//               title={item.title}
//               firstValue="$100"
//               secondValue="+9.06"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
//
