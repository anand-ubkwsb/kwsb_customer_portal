export const bulkBill = (bulkbillData, conservancy_fire_arrears, formatNumber) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bulk Bill</title>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat"
      rel="stylesheet"
    />
    <style type="text/css">
     *{
        font-family: Montserrat;
        margin: 0;
        padding: 0;
        border: 0;
      }
      
    .ft10{font-size:14px;font-weight: bold;font-family:Times;color:#000000;}
	.ft11{font-size:11px; color:#000000;}
	.ft12{font-size:11px;color:#000000;}
	.ft13{font-size:11px;color:#000000;}
	.ft14{font-size:10px;color:#000000;}
	.ft15{font-size:9px;font-weight: 600; color:#000000;}
	.ft16{font-size:15px;color:#000000;}
	.ft17{font-size:12px;line-height:18px;color:#000000;}
	.ft18{font-size:11px;line-height:18px;color:#000000;}
    .ft9{font-size:20px;font-weight: bold; color:#000000;}
    </style>
  </head>
  <body bgcolor="#ffffff" vlink="blue" link="blue">
    <div id="page1-div" style="position: relative; width: 892px; height: 1261px">

      <img width="892" height="1261" loading="lazy" src="data:image/png;base64,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AADQnQAA6E4AANCdAADoTgAAdCcAAOhOAAB0JwAA6E4AAHQnAAC6EwAAdCcAALoTAAB0JwAAuhMAAN0JAAC6EwAA3QkAgO4EAADdCQCA7gQAAN0JAIDuBABAdwIAgO4EAEB3AgCA7gQAQHcCAKA7AQBAdwIAoDsBANCdAACgOwEA0J0AAKA7AQDQnQAA6E4AANCdAADoTgAA0J0AAOhOAAB0JwAA6E4AAHQnAADoTgAAdCcAALoTAAB0JwAAuhMAAN0JAAC6EwAA3QkAALoTAADdCQCA7gQAAN0JAIDuBAAA3QkAgO4EAEB3AgCA7gQAQHcCAIDuBABAdwIAoDsBAEB3AgCgOwEA0J0AAKA7AQDQnQAAoDsBANCdAADoTgAA0J0AAOhOAADQnQAA6E4AAHQnAADoTgAAdCcAALoTAAB0JwAAuhMAAHQnAAC6EwAA3QkAALoTAADdCQAAuhMAAN0JAIDuBAAA3QkAgO4EAADdCQCA7gQAQHcCAIDuBABAdwIAoDsBAEB3AgCgOwEAQHcCAKA7AQDQnQAAoDsBANCdAACgOwEA0J0AAOhOAADQnQAA6E4AANCdAADoTgAAdCcAAOhOAAB0JwAAuhMAAHQnAAC6EwAAdCcAALoTAADdCQAAuhMAAN0JAAC6EwAA3QkAgO4EAADdCQCA7gQAQHcCAIDuBABAdwIAgO4EAEB3AgCgOwEAQHcCAKA7AQBAdwIAoDsBANCdAACgOwEA0J0AAKA7AQDQnQAA6E4AANCdAADoTgAAdCcAAOhOAAB0JwAA6E4AAHQnAAC6EwAAdCcAALoTAAB0JwAAuhMAAN0JAAC6EwAA3QkAgO4EAADdCQCA7gQAAN0JAIDuBABAdwIAgO4EAEB3AgCA7gQAQHcCAKA7AQBAdwIAoDsBAEB3AgCgOwEA0J0AAKA7AQDQnQAA6E4AANCdAADoTgAA0J0AAOhOAAB0JwAA6E4AAHQnAADoTgAAdCcAALoTAAB0JwAAuhMAAHQnAAC6EwAA3QkAALoTAADdCQCA7gQAAN0JAIDuBAAA3QkAgO4EAEB3AgCA7gQAQHcCAIDuBABAdwIAsKKj/cQkZuX/qsoIAEB/d4oMvIcAAL/ynR0AAN0JAIDuBAAA3QkAgO4EAEB3AgCA7gQAQHcCAIDuBABAdwIAoDsBAEB3AgCgOwEAQHcCAKA7AQDQ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" alt="background image"/>

      <div style="height: 70px; width:95%; left: 20px; top: 0px;  position: absolute; background-color: #2379e0; z-index:0; margin-top: 15px;">
        <p style="position: absolute; top: 35px; left: 10px; white-space: nowrap; color: #fff; z-index: 999;" class="ft16">
            <b>Duplicate Bill / E-Billing</b>
          </p>
          <p style="position: absolute; top: 35px; left: 330px; white-space: nowrap; color: #fff;; z-index: 999;" class="ft9">
            <b>BULK CONSUMER BILL</b>
          </p>

          <p style="position:absolute;top:45px;left:705px;white-space:nowrap; color: #fff;; z-index: 999;font-size:11px;" class="ft13"><b>${bulkbillData?.TOWN_NAME}</b></p>

      </div>

      <p style="position:absolute;top:89px;left:221px;white-space:nowrap;font-size:11px;" class="ft10"><b>WATER SUPPLY AND SEWERAGE/WASTE WATER DISPOSAL BILL</b></p>

      <p style="position:absolute;top:117px;left:32px;white-space:nowrap;" class="ft13"><b>Customer's Copy</b></p>
      <p style="position:absolute;top:117px;left:759px;white-space:nowrap;font-size:13px;" class="ft13"><b>${bulkbillData.BULK_CONSUMER_CD}</b></p>

      <p style="position:absolute;top:144px;left:32px;white-space:nowrap" class="ft11">Consumer No.</p>
      <p style="position:absolute;top:144px;left:153px;white-space:nowrap" class="ft12"><b>${bulkbillData.BULK_CONSUMER_ID}</b></p>

      <p style="position:absolute;top:198px;left:32px;white-space:nowrap" class="ft11">Name &amp; Address</p>
      <p style="position:absolute;top:225px;left:36px;white-space:nowrap" class="ft17"><b>${bulkbillData.BULK_CONSUMER_NAME}<br>${bulkbillData.ADDRESS_1}<br>${bulkbillData.ADDRESS_2}</b></p>

      <p style="position:absolute;top:144px;left:409px;white-space:nowrap" class="ft11">Town</p>
      <p style="position:absolute;top:171px;left:391px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.SECTOR_NAME}</b></p>

      <p style="position:absolute;top:144px;left:522px;white-space:nowrap" class="ft11">Billing Period</p>
      <p style="position:absolute;top:171px;left:526px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.BILL_PERIOD}</b></p>

      <p style="position:absolute;top:144px;left:653px;white-space:nowrap" class="ft11">Issue Date</p>
      <p style="position:absolute;top:171px;left:645px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.ISSU_DT}</b></p>

      <p style="position:absolute;top:144px;left:781px;white-space:nowrap" class="ft11">Due Date</p>
      <p style="position:absolute;top:171px;left:769px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.DUE_DT}</b></p>

      <p style="position:absolute;top:198px;left:535px;white-space:nowrap;font-weight: 600;" class="ft11">Current</p>
      <p style="position:absolute;top:198px;left:662px;white-space:nowrap;font-weight: 600;" class="ft11">Arrears</p>
      <p style="position:absolute;top:198px;left:792px;white-space:nowrap;font-weight: 600;" class="ft11">Total</p>

      <p style="position:absolute;top:225px;left:360px;white-space:nowrap;font-size:12px;" class="ft11">Water</p>
      <p style="position:absolute;top:225px;left:548px;white-space:nowrap;font-size:11px;" class="ft13"><b>${formatNumber(bulkbillData.WATER_FIRE_CURRENT)}</b></p>
      <p style="position:absolute;top:225px;left:660px;white-space:nowrap;font-size:11px;" class="ft13"><b>${formatNumber(bulkbillData.WATER_FIRE_ARREARS)}</b></p>
      <p style="position:absolute;top:225px;left:787px;white-space:nowrap;font-size:11px;" class="ft13"><b>${formatNumber(bulkbillData.WATER_FIRE_TOTAL)}</b></p>

      <p style="position:absolute;top:252px;left:360px;white-space:nowrap;font-size:12px;" class="ft11">Sewerage</p>
      <p style="position:absolute;top:252px;left:605px;white-space:nowrap;font-size:11px;" class="ft13"><b>${formatNumber(bulkbillData.SEWERAGE_CONSERVANCY_CURRENT)}</b></p>
      <p style="position:absolute;top:252px;left:660px;white-space:nowrap;font-size:11px;" class="ft13"><b>${formatNumber(bulkbillData.SEWERAGE_CONSERVANCY_ARREARS)}</b></p>
      <p style="position:absolute;top:252px;left:787px;white-space:nowrap;font-size:11px;" class="ft13"><b>${formatNumber(bulkbillData.SEWERAGE_CONSERVANCY_TOTAL)}</b></p>


      <p style="position:absolute;top:279px;left:360px;white-space:nowrap;font-size:12px;" class="ft11">Metering/Allied Chrg</p>
      <p style="position:absolute;top:279px;left:844px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.METER_ALLIED_CHARGES}</b></p>

      <p style="position:absolute;top:306px;left:360px;white-space:nowrap;font-size:12px;" class="ft11">Bank Charges</p>
      <p style="position:absolute;top:306px;left:844px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.BANK_CHARGE}</b></p>

      <p style="position:absolute;top:333px;left:360px;white-space:nowrap;font-size:12px;" class="ft13"><b>Net Amount</b></p>
      <p style="position:absolute;top:333px;left:785px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.NET_AMOUNT}</b></p>

      <p style="position:absolute;top:360px;left:360px;white-space:nowrap;font-size:12px;" class="ft11">Surcharge</p>
      <p style="position:absolute;top:360px;left:804px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.SURCHARGE_AMOUNT}</b></p>

      <p style="position:absolute;top:387px;left:360px;white-space:nowrap;font-size:12px;" class="ft13"><b>Gross Amount</b></p>
      <p style="position:absolute;top:387px;left:785px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.GROSS_AMOUNT}</b></p>

      
      <p style="position:absolute;top:419px;left:452px;white-space:nowrap;font-size:12px;" class="ft11">Meter Reading</p>
      <p style="position:absolute;top:449px;left:402px;white-space:nowrap;font-size:12px;" class="ft11">Previous</p>
      <p style="position:absolute;top:477px;left:398px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.PREVIOUS_READING}</b></p>
      <p style="position:absolute;top:447px;left:531px;white-space:nowrap;font-size:12px;" class="ft11">Current</p>
      <p style="position:absolute;top:477px;left:524px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.CURRENT_READING}</b></p>

      <p style="position:absolute;top:417px;left:648px;white-space:nowrap;font-size:12px;" class="ft11">Meter Code</p>
      <p style="position:absolute;top:417px;left:802px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.meter_type_id}</b></p>

      <p style="position:absolute;top:449px;left:653px;white-space:nowrap;font-size:12px;" class="ft11">Meter No.</p>
      <p style="position:absolute;top:449px;left:802px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.meter_no}</b></p>

      <p style="position:absolute;top:476px;left:646px;white-space:nowrap;font-size:12px;" class="ft11">Reading Date</p>
      <p style="position:absolute;top:476px;left:802px;white-space:nowrap;font-size:11px;" class="ft13"><b>${!isNaN(bulkbillData.date_of_reading) ? " " : bulkbillData.date_of_reading}</b></p>

      <p style="position:absolute;top:502px;left:632px;white-space:nowrap;font-size:12px;" class="ft11">Consumption (Gal.)</p>
      <p style="position:absolute;top:502px;left:773px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.CONSUMPTION}</b></p>

      <p style="position:absolute;top:529px;left:652px;white-space:nowrap;font-size:12px;" class="ft11">Water Rate</p>
      <p style="position:absolute;top:529px;left:796px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.WATER_RATE}</b></p>

      <p style="position:absolute;top:493px;left:386px;white-space:nowrap;text-align: center;font-size:10px" class="ft15">Connection</p>
      <p style="position:absolute;top:505px;left:400px;white-space:nowrap;text-align: center;font-size:10px" class="ft15">Size</p>
      <p style="position:absolute;top:531px;left:386px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.CONNECTION_SIZE}</b></p>

      <p style="position:absolute;top:493px;left:458px;white-space:nowrap; text-align: center;font-size:10px" class="ft15">Source of Water</p>
      <p style="position:absolute;top:505px;left:468px;white-space:nowrap; text-align: center;font-size:10px" class="ft15">Supply Line</p>
      <p style="position:absolute;top:531px;left:488px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.connection_source}</b></p>

      <p style="position:absolute;top:493px;left:568px;white-space:nowrap;text-align: center;font-size:10px" class="ft15">Line</p>
      <p style="position:absolute;top:505px;left:558px;white-space:nowrap;text-align: center;font-size:10px" class="ft15">Custodian</p>
      <p style="position:absolute;top:531px;left:570px;white-space:nowrap;font-size:11px;" class="ft13"><b>0</b></p>

      <p style="position:absolute;top:558px;left:548px;white-space:nowrap;font-size:12px;" class="ft11">Total Outstanding Arrears</p>

      <p style="position:absolute;top:585px;left:360px;white-space:nowrap;font-size:11px;line-height:18px" class="ft18"><b>Water<b></p>
      <p style="position:absolute;top:585px;left:773px;white-space:nowrap;font-size:11px;" class="ft13"><b>${formatNumber(bulkbillData.OUT_WATER_ARREARS)}</b></p>


      <p style="position:absolute;top:603px;left:360px;white-space:nowrap;font-size:11px;line-height:18px" class="ft18"><b>Sewerage<br>Water Surcharge<b></p>
      <p style="position:absolute;top:603px;left:784px;white-space:nowrap;font-size:11px;" class="ft17"><b>548,086,411<br>${formatNumber(bulkbillData.OUT_WATER_SURCHARGE)}</b></p>

    
      <p style="position:absolute;top:639px;left:360px;white-space:nowrap;font-size:11px;line-height:18px" class="ft18"><b>Total<b></p>
      <p style="position:absolute;top:639px;left:773px;white-space:nowrap;font-size:11px;" class="ft13"><b>${formatNumber(bulkbillData.OUT_WATER_TOTAL)}</b></p>
      
      <p style="position:absolute;top:663px;left:360px;white-space:nowrap;font-size:11px;" class="ft13"><b>Conservancy and Fire Arrears :</b></p>
      <p style="position:absolute;top:663px;left:576px;white-space:nowrap;font-size:11px;" class="ft13"><b>&nbsp;${formatNumber(conservancy_fire_arrears)}&nbsp;</b></p>

      
      <p style="position:absolute;top:700px;left:760px;white-space:nowrap;z-index: 1000; color: #ffffff;font-size:11px;" class="ft13"><b>Control Room - IT</b></p>
      <div style="z-index: 0; height: 150px; width:95%; left: 20px; top:696px; position: absolute;background-color: #2379e0;">
      </div>


      <p style="position:absolute;top:306px;left:122px;white-space:nowrap" class="ft11">Billing &amp; Payment History</p>

      <p style="position:absolute;top:333px;left:43px;white-space:nowrap;font-size:11px" class="ft14">Month</p>
      <p style="position:absolute;top:333px;left:112px;white-space:nowrap;font-size:11px" class="ft14">Amount Bill</p>
      <p style="position:absolute;top:333px;left:190px;white-space:nowrap;font-size:11px" class="ft14">Amount Paid</p>
      <p style="position:absolute;top:333px;left:273px;white-space:nowrap;font-size:11px" class="ft14">Payment Date</p>

      <p style="position:absolute;top:364px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_12 === null ? " " :bulkbillData.BILLING_MONTH_12}</p>
      <p style="position:absolute;top:364px;left:105px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_12 === null ? " " : bulkbillData.AMOUNT_BILLED_12}</p>
      <p style="position:absolute;top:364px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_12 === null ? " " : bulkbillData.AMOUNT_PAID_12}</p>
      <p style="position:absolute;top:364px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_12 === null ? " " : bulkbillData.PAYMENT_DATE_12}</p>

      <p style="position:absolute;top:391px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_11 === null ? " " : bulkbillData.BILLING_MONTH_11}</p>
      <p style="position:absolute;top:391px;left:115px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_11 === null ? " " : bulkbillData.AMOUNT_BILLED_11}</p>
      <p style="position:absolute;top:391px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_11 === null ? " " : bulkbillData.AMOUNT_PAID_11}</p>
      <p style="position:absolute;top:391px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_11 === null ? " " : bulkbillData.PAYMENT_DATE_11}</p>

      <p style="position:absolute;top:421px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_10 === null ? " " : bulkbillData.BILLING_MONTH_10}</p>
      <p style="position:absolute;top:421px;left:115px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_0 === null ? " " : bulkbillData.AMOUNT_BILLED_10}</p>
      <p style="position:absolute;top:421px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_10 === null ? " " : bulkbillData.AMOUNT_PAID_10}</p>
      <p style="position:absolute;top:421px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_10 === null ? " " : bulkbillData.PAYMENT_DATE_10}</p>

      <p style="position:absolute;top:450px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_9 === null ? " " : bulkbillData.BILLING_MONTH_9}</p>
      <p style="position:absolute;top:450px;left:115px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_19 === null ? " " : bulkbillData.AMOUNT_BILLED_9}</p>
      <p style="position:absolute;top:450px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_9 === null ? " " : bulkbillData.AMOUNT_PAID_9}</p>
      <p style="position:absolute;top:450px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_9 === null ? " " : bulkbillData.PAYMENT_DATE_9}</p>

      <p style="position:absolute;top:477px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_8 === null ? " " : bulkbillData.BILLING_MONTH_8}</p>
      <p style="position:absolute;top:477px;left:115px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_8 === null ? " " : bulkbillData.AMOUNT_BILLED_8}</p>
      <p style="position:absolute;top:477px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_8 === null ? " " : bulkbillData.AMOUNT_PAID_8}</p>
      <p style="position:absolute;top:477px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_8 === null ? " " : bulkbillData.PAYMENT_DATE_8}</p>

      <p style="position:absolute;top:504px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_7 === null ? " " : bulkbillData.BILLING_MONTH_7}</p>
      <p style="position:absolute;top:504px;left:115px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_7 === null ? " " : bulkbillData.AMOUNT_BILLED_7}</p>
      <p style="position:absolute;top:504px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_7 === null ? " " : bulkbillData.AMOUNT_PAID_7}</p>
      <p style="position:absolute;top:504px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_7 === null ? " " : bulkbillData.PAYMENT_DATE_7}</p>

      <p style="position:absolute;top:531px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_6 === null ? " " : bulkbillData.BILLING_MONTH_6}</p>
      <p style="position:absolute;top:531px;left:115px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_6 === null ? " " : bulkbillData.AMOUNT_BILLED_6}</p>
      <p style="position:absolute;top:531px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_6 === null ? " " : bulkbillData.AMOUNT_PAID_6}</p>
      <p style="position:absolute;top:531px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_6 === null ? " " : bulkbillData.PAYMENT_DATE_6}</p>

      <p style="position:absolute;top:558px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_5 === null ? " " : bulkbillData.BILLING_MONTH_5}</p>
      <p style="position:absolute;top:558px;left:115px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_5 === null ? " " : bulkbillData.AMOUNT_BILLED_5}</p>
      <p style="position:absolute;top:558px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_5 === null ? " " : bulkbillData.AMOUNT_PAID_5}</p>
      <p style="position:absolute;top:558px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_5 === null ? " " : bulkbillData.PAYMENT_DATE_5}</p>

      <p style="position:absolute;top:585px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_4 === null ? " " : bulkbillData.BILLING_MONTH_4}</p>
      <p style="position:absolute;top:585px;left:110px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_4 === null ? " " : bulkbillData.AMOUNT_BILLED_4}</p>
      <p style="position:absolute;top:585px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_4 === null ? " " : bulkbillData.AMOUNT_PAID_4}</p>
      <p style="position:absolute;top:585px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_4 === null ? " " : bulkbillData.PAYMENT_DATE_4}</p>

      <p style="position:absolute;top:612px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_3 === null ? " " : bulkbillData.BILLING_MONTH_3}</p>
      <p style="position:absolute;top:612px;left:115px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_3 === null ? " " : bulkbillData.AMOUNT_BILLED_3}</p>
      <p style="position:absolute;top:612px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_3 === null ? " " : bulkbillData.AMOUNT_PAID_3}</p>
      <p style="position:absolute;top:612px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_3 === null ? " " : bulkbillData.PAYMENT_DATE_3}</p>

      <p style="position:absolute;top:639px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_2 === null ? " " : bulkbillData.BILLING_MONTH_2}</p>
      <p style="position:absolute;top:639px;left:115px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_2 === null ? " " : bulkbillData.AMOUNT_BILLED_2}</p>
      <p style="position:absolute;top:639px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_2 === null ? " " : bulkbillData.AMOUNT_PAID_2}</p>
      <p style="position:absolute;top:639px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_2 === null ? " " : bulkbillData.PAYMENT_DATE_2}</p>

      <p style="position:absolute;top:666px;left:32px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.BILLING_MONTH_1 === null ? " " : bulkbillData.BILLING_MONTH_1}</p>
      <p style="position:absolute;top:666px;left:115px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_BILLED_1 === null ? " " : bulkbillData.AMOUNT_BILLED_1}</p>
      <p style="position:absolute;top:666px;left:196px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.AMOUNT_PAID_1 === null ? " " : bulkbillData.AMOUNT_PAID_1}</p>
      <p style="position:absolute;top:666px;left:291px;white-space:nowrap;font-size:10px" class="ft14">${bulkbillData.PAYMENT_DATE_1 === null ? " " : bulkbillData.PAYMENT_DATE_1}</p>


      <p style="position:absolute;top:889px;left:34px;white-space:nowrap; font-weight: bold;" class="ft10"><b>WATER SUPPLY AND SEWERAGE/WASTE WATER DISPOSAL BILL</b></p>
      <p style="position:absolute;top:888px;left:721px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.TOWN_NAME}</b></p>

      <p style="position:absolute;top:914px;left:32px;white-space:nowrap" class="ft13"><b>Bank/Department Copy</b></p>
      <p style="position:absolute;top:914px;left:536px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.BAR_CODE}</b></p>
      <p style="position:absolute;top:914px;left:757px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.BULK_CONSUMER_CD}</b></p>

      <p style="position:absolute;top:944px;left:32px;white-space:nowrap" class="ft11">Consumer No.</p>
      <p style="position:absolute;top:944px;left:159px;white-space:nowrap" class="ft12"><b>${bulkbillData.BULK_CONSUMER_ID}</b></p>


      <p style="position:absolute;top:995px;left:32px;white-space:nowrap" class="ft11">Name &amp; Address</p>
      <p style="position:absolute;top:1022px;left:29px;white-space:nowrap" class="ft17"><b>${bulkbillData.BULK_CONSUMER_NAME}<br>${bulkbillData.ADDRESS_1}<br>${bulkbillData.ADDRESS_2}</b></p>


      <p style="position:absolute;top:943px;left:409px;white-space:nowrap" class="ft11">Town</p>
      <p style="position:absolute;top:968px;left:391px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.SECTOR_NAME}</b></p>

      <p style="position:absolute;top:943px;left:522px;white-space:nowrap" class="ft11">Billing Period</p>
      <p style="position:absolute;top:968px;left:526px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.BILL_PERIOD}</b></p>

      <p style="position:absolute;top:943px;left:653px;white-space:nowrap" class="ft11">Issue Date</p>
      <p style="position:absolute;top:968px;left:645px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.ISSU_DT}</b></p>

      <p style="position:absolute;top:943px;left:781px;white-space:nowrap" class="ft11">Due Date</p>
      <p style="position:absolute;top:967px;left:769px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.DUE_DT}</b></p>

      <p style="position:absolute;top:992px;left:535px;white-space:nowrap;" class="ft11">Current</p>
      <p style="position:absolute;top:995px;left:662px;white-space:nowrap;" class="ft11">Arrears</p>
      <p style="position:absolute;top:993px;left:792px;white-space:nowrap;" class="ft11">Total</p>


      <p style="position:absolute;top:1023px;left:360px;white-space:nowrap;font-size:12px" class="ft11">Water</p>
      <p style="position:absolute;top:1024px;left:548px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.WATER_FIRE_CURRENT}</b></p>
      <p style="position:absolute;top:1024px;left:660px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.WATER_FIRE_ARREARS}</b></p>
      <p style="position:absolute;top:1023px;left:787px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.WATER_FIRE_TOTAL}</b></p>

      
      <p style="position:absolute;top:1047px;left:360px;white-space:nowrap;font-size:12px" class="ft11">Sewerage</p>
      <p style="position:absolute;top:1047px;left:548px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.SEWERAGE_CONSERVANCY_CURRENT}</b></p>
      <p style="position:absolute;top:1047px;left:660px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.SEWERAGE_CONSERVANCY_ARREARS}</b></p>
      <p style="position:absolute;top:1047px;left:787px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.SEWERAGE_CONSERVANCY_TOTAL}</b></p>

      <p style="position:absolute;top:1073px;left:360px;white-space:nowrap;font-size:12px" class="ft11">Metering/Allied Chrg</p>
      <p style="position:absolute;top:1078px;left:844px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.METER_ALLIED_CHARGES}</b></p>
      
      <p style="position:absolute;top:1100px;left:360px;white-space:nowrap;font-size:12px" class="ft11">Bank Charges</p>
      <p style="position:absolute;top:1099px;left:844px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.BANK_CHARGE}</b></p>

      <p style="position:absolute;top:1128px;left:360px;white-space:nowrap;font-size:12px" class="ft11">Net Amount</p>
      <p style="position:absolute;top:1127px;left:785px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.NET_AMOUNT}</b></p>

      <p style="position:absolute;top:1156px;left:360px;white-space:nowrap;font-size:12px" class="ft11">Surcharge</p>
      <p style="position:absolute;top:1151px;left:804px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.SURCHARGE_AMOUNT}</b></p>

      <p style="position:absolute;top:1183px;left:360px;white-space:nowrap;font-size:12px" class="ft11">Gross Amount</p>
      <p style="position:absolute;top:1182px;left:785px;white-space:nowrap;font-size:11px;" class="ft13"><b>${bulkbillData.GROSS_AMOUNT}</b></p>

    </div>
  </body>
</html>



`;
