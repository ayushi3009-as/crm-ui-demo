import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // 1. Create Superadmin User
  const superadminPassword = await bcrypt.hash('admin123', 10);
  const superadmin = await prisma.user.upsert({
    where: { email: 'admin@tivra.com' },
    update: {},
    create: {
      name: 'Super Admin',
      email: 'admin@tivra.com',
      password: superadminPassword,
      role: 'SUPERADMIN',
      approvalStatus: 'APPROVED'
    },
  });
  console.log(`Created superadmin with email: ${superadmin.email}`);

  // 2. Create Default Lead Sources
  const sources = [
    { name: 'Website', color: '#3B82F6', icon: 'Globe' },
    { name: 'Meta Ads', color: '#1877F2', icon: 'Facebook' },
    { name: 'Google Ads', color: '#EA4335', icon: 'Google' },
    { name: 'WhatsApp', color: '#25D366', icon: 'MessageCircle' },
  ];
  await prisma.customer.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.leadSource.deleteMany();
  await prisma.companySettings.deleteMany();
  await prisma.user.deleteMany();

  console.log('🧹 Cleaned existing data\n');

  // 1. Create Lead Sources
  const sources = await Promise.all([
    prisma.leadSource.create({
      data: {
        name: 'Google Ads',
        icon: 'google',
        color: '#4285F4',
      },
    }),
    prisma.leadSource.create({
      data: {
        name: 'Facebook Ads',
        icon: 'facebook',
        color: '#1877F2',
      },
    }),
    prisma.leadSource.create({
      data: {
        name: 'WhatsApp',
        icon: 'whatsapp',
        color: '#25D366',
      },
    }),
    prisma.leadSource.create({
      data: {
        name: 'Website',
        icon: 'globe',
        color: '#6366F1',
      },
    }),
    prisma.leadSource.create({
      data: {
        name: 'Manual Entry',
        icon: 'edit',
        color: '#F59E0B',
      },
    }),
    prisma.leadSource.create({
      data: {
        name: 'Referral',
        icon: 'users',
        color: '#10B981',
      },
    }),
  ]);

  console.log(`✅ Created ${sources.length} lead sources`);

  // 2. Create Users
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const salesPassword = await bcrypt.hash('sales123', 10);

  const admin = await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@tivra.com',
      password: hashedPassword,
      role: 'ADMIN',
      phone: '+91 9876543210',
    },
  });

  const rahul = await prisma.user.create({
    data: {
      name: 'Rahul Sharma',
      email: 'rahul@tivra.com',
      password: salesPassword,
      role: 'SALES',
      phone: '+91 9876543211',
    },
  });

  const priya = await prisma.user.create({
    data: {
      name: 'Priya Singh',
      email: 'priya@tivra.com',
      password: salesPassword,
      role: 'SALES',
      phone: '+91 9876543212',
    },
  });

  console.log('✅ Created 3 users (1 admin, 2 sales)');

  const salesUsers = [rahul, priya];

  // 3. Create 25 Sample Leads
  const leadData = [
    { fullName: 'Arjun Mehta', email: 'arjun.mehta@techsolutions.in', phone: '+91 9812345001', companyName: 'Tech Solutions Pvt Ltd', city: 'Mumbai', interest: 'CRM Software', status: 'NEW', leadScore: 45 },
    { fullName: 'Sneha Patel', email: 'sneha.patel@infoware.co', phone: '+91 9812345002', companyName: 'Infoware Systems', city: 'Ahmedabad', interest: 'ERP Integration', status: 'CONTACTED', leadScore: 55 },
    { fullName: 'Vikram Reddy', email: 'vikram.r@cloudnine.io', phone: '+91 9812345003', companyName: 'CloudNine Technologies', city: 'Hyderabad', interest: 'Cloud Migration', status: 'QUALIFIED', leadScore: 78 },
    { fullName: 'Ananya Iyer', email: 'ananya.iyer@globalsoft.com', phone: '+91 9812345004', companyName: 'GlobalSoft India', city: 'Chennai', interest: 'Web Development', status: 'PROPOSAL', leadScore: 82 },
    { fullName: 'Rohit Kapoor', email: 'rohit.kapoor@nexgen.in', phone: '+91 9812345005', companyName: 'NexGen Innovations', city: 'Delhi', interest: 'Mobile App', status: 'NEGOTIATION', leadScore: 90 },
    { fullName: 'Kavita Nair', email: 'kavita.nair@brightedge.co', phone: '+91 9812345006', companyName: 'BrightEdge Media', city: 'Bangalore', interest: 'Digital Marketing', status: 'WON', leadScore: 95 },
    { fullName: 'Suresh Gupta', email: 'suresh.gupta@primeindia.com', phone: '+91 9812345007', companyName: 'Prime India Corp', city: 'Pune', interest: 'IT Consulting', status: 'LOST', leadScore: 30 },
    { fullName: 'Meera Joshi', email: 'meera.joshi@startupvilla.in', phone: '+91 9812345008', companyName: 'Startup Villa', city: 'Mumbai', interest: 'Product Design', status: 'NEW', leadScore: 40 },
    { fullName: 'Aditya Verma', email: 'aditya.v@digitalcraft.io', phone: '+91 9812345009', companyName: 'DigitalCraft Studios', city: 'Noida', interest: 'UI/UX Design', status: 'CONTACTED', leadScore: 60 },
    { fullName: 'Pooja Saxena', email: 'pooja.s@finserve.co.in', phone: '+91 9812345010', companyName: 'FinServe Solutions', city: 'Jaipur', interest: 'Fintech Software', status: 'QUALIFIED', leadScore: 72 },
    { fullName: 'Rajesh Kumar', email: 'rajesh.k@buildtech.in', phone: '+91 9812345011', companyName: 'BuildTech Infra', city: 'Lucknow', interest: 'Project Management', status: 'NEW', leadScore: 35 },
    { fullName: 'Divya Menon', email: 'divya.menon@healthplus.com', phone: '+91 9812345012', companyName: 'HealthPlus Systems', city: 'Kochi', interest: 'Healthcare CRM', status: 'PROPOSAL', leadScore: 85 },
    { fullName: 'Nikhil Bhatt', email: 'nikhil.bhatt@ecoshop.in', phone: '+91 9812345013', companyName: 'EcoShop India', city: 'Surat', interest: 'E-Commerce Platform', status: 'CONTACTED', leadScore: 50 },
    { fullName: 'Ritu Agarwal', email: 'ritu.a@learnfast.edu', phone: '+91 9812345014', companyName: 'LearnFast EdTech', city: 'Kolkata', interest: 'LMS Development', status: 'NEGOTIATION', leadScore: 88 },
    { fullName: 'Sanjay Mishra', email: 'sanjay.m@automate.co', phone: '+91 9812345015', companyName: 'Automate Solutions', city: 'Indore', interest: 'Workflow Automation', status: 'WON', leadScore: 92 },
    { fullName: 'Isha Deshmukh', email: 'isha.d@creativemind.in', phone: '+91 9812345016', companyName: 'Creative Minds Agency', city: 'Pune', interest: 'Brand Strategy', status: 'NEW', leadScore: 42 },
    { fullName: 'Manish Tiwari', email: 'manish.t@datawise.io', phone: '+91 9812345017', companyName: 'DataWise Analytics', city: 'Bangalore', interest: 'Data Analytics', status: 'QUALIFIED', leadScore: 76 },
    { fullName: 'Sunita Rao', email: 'sunita.rao@greentech.com', phone: '+91 9812345018', companyName: 'GreenTech Innovations', city: 'Chennai', interest: 'Sustainability Software', status: 'CONTACTED', leadScore: 58 },
    { fullName: 'Amit Pandey', email: 'amit.pandey@swiftlogic.in', phone: '+91 9812345019', companyName: 'SwiftLogic Systems', city: 'Delhi', interest: 'API Integration', status: 'LOST', leadScore: 25 },
    { fullName: 'Neha Sharma', email: 'neha.sharma@pixelart.co', phone: '+91 9812345020', companyName: 'PixelArt Studios', city: 'Mumbai', interest: 'Graphic Design', status: 'NEW', leadScore: 38 },
    { fullName: 'Deepak Choudhary', email: 'deepak.c@logipro.in', phone: '+91 9812345021', companyName: 'LogiPro Logistics', city: 'Gurgaon', interest: 'Supply Chain CRM', status: 'PROPOSAL', leadScore: 80 },
    { fullName: 'Lakshmi Pillai', email: 'lakshmi.p@smarthr.co', phone: '+91 9812345022', companyName: 'SmartHR Solutions', city: 'Trivandrum', interest: 'HR Management', status: 'QUALIFIED', leadScore: 74 },
    { fullName: 'Gaurav Singh', email: 'gaurav.s@cyberfort.in', phone: '+91 9812345023', companyName: 'CyberFort Security', city: 'Chandigarh', interest: 'Cybersecurity', status: 'CONTACTED', leadScore: 62 },
    { fullName: 'Shruti Bose', email: 'shruti.b@travelease.com', phone: '+91 9812345024', companyName: 'TravelEase India', city: 'Kolkata', interest: 'Travel Portal', status: 'NEGOTIATION', leadScore: 86 },
    { fullName: 'Karthik Natarajan', email: 'karthik.n@agritech.in', phone: '+91 9812345025', companyName: 'AgriTech Solutions', city: 'Coimbatore', interest: 'AgriTech Software', status: 'NEW', leadScore: 48 },
  ];

  const leads = [];
  for (let i = 0; i < leadData.length; i++) {
    const data = leadData[i];
    const sourceIndex = i % sources.length;
    const assignedTo = salesUsers[i % salesUsers.length];

    // Spread creation dates over the last 3 months
    const daysAgo = Math.floor(Math.random() * 90);
    const createdAt = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);

    const lead = await prisma.lead.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName,
        city: data.city,
        interest: data.interest,
        status: data.status,
        leadScore: data.leadScore,
        sourceId: sources[sourceIndex].id,
        assignedToId: assignedTo.id,
        createdById: admin.id,
        createdAt,
      },
    });
    leads.push(lead);
  }

  console.log(`✅ Created ${leads.length} leads`);

  // 4. Create 5 Sample Customers
  const customerData = [
    { fullName: 'Kavita Nair', email: 'kavita.nair@brightedge.co', phone: '+91 9812345006', companyName: 'BrightEdge Media', city: 'Bangalore', address: '123 MG Road, Indiranagar, Bangalore 560038', notes: 'Long-term client, interested in annual contract' },
    { fullName: 'Sanjay Mishra', email: 'sanjay.m@automate.co', phone: '+91 9812345015', companyName: 'Automate Solutions', city: 'Indore', address: '45 Vijay Nagar, Indore 452010', notes: 'Converted from referral, high-value client' },
    { fullName: 'Pradeep Malhotra', email: 'pradeep.m@silverline.in', phone: '+91 9812345030', companyName: 'Silverline Industries', city: 'Delhi', address: '78 Connaught Place, New Delhi 110001', notes: 'Enterprise client, needs custom solution' },
    { fullName: 'Anjali Desai', email: 'anjali.d@freshworks.co', phone: '+91 9812345031', companyName: 'FreshWorks Ltd', city: 'Pune', address: '12 Hinjewadi IT Park, Pune 411057', notes: 'Startup client, rapid scaling expected' },
    { fullName: 'Vivek Chatterjee', email: 'vivek.c@bengaltiger.com', phone: '+91 9812345032', companyName: 'Bengal Tiger Exports', city: 'Kolkata', address: '56 Park Street, Kolkata 700016', notes: 'Export business, needs multi-currency support' },
  ];

  // Find WON leads to link as convertedFrom
  const wonLeads = leads.filter((l) => leadData[leads.indexOf(l)]?.status === 'WON');

  const customers = [];
  for (let i = 0; i < customerData.length; i++) {
    const data = customerData[i];
    const customer = await prisma.customer.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName,
        city: data.city,
        address: data.address,
        notes: data.notes,
        convertedFromLeadId: wonLeads[i] ? wonLeads[i].id : null,
        createdById: admin.id,
      },
    });
    customers.push(customer);
  }

  console.log(`✅ Created ${customers.length} customers`);

  // 5. Create Sample Activities
  const activityData = [
    { type: 'NOTE', title: 'Lead created', description: 'Lead "Arjun Mehta" was created.' },
    { type: 'CALL', title: 'Initial call completed', description: 'Discussed requirements with Sneha Patel. She is interested in ERP integration.' },
    { type: 'EMAIL', title: 'Proposal sent', description: 'Sent detailed proposal to Vikram Reddy for cloud migration project.' },
    { type: 'MEETING', title: 'Demo scheduled', description: 'Product demo scheduled with Ananya Iyer for next Tuesday.' },
    { type: 'STATUS_CHANGE', title: 'Status changed', description: 'Status changed from PROPOSAL to NEGOTIATION.' },
    { type: 'CALL', title: 'Follow-up call', description: 'Follow-up call with Rohit Kapoor. Negotiating pricing terms.' },
    { type: 'STATUS_CHANGE', title: 'Lead converted', description: 'Lead "Kavita Nair" converted to WON status.' },
    { type: 'EMAIL', title: 'Welcome email sent', description: 'Sent welcome and onboarding email to Kavita Nair.' },
    { type: 'NOTE', title: 'Requirements documented', description: 'Documented technical requirements for Pooja Saxena - Fintech software project.' },
    { type: 'MEETING', title: 'Client meeting', description: 'Met with Divya Menon to discuss Healthcare CRM requirements.' },
    { type: 'ASSIGNMENT', title: 'Lead assigned', description: 'Lead "Meera Joshi" assigned to Rahul Sharma.' },
    { type: 'CALL', title: 'Qualification call', description: 'Qualification call with Manish Tiwari. Confirmed budget and timeline.' },
    { type: 'STATUS_CHANGE', title: 'Status changed', description: 'Status changed from CONTACTED to QUALIFIED.' },
    { type: 'NOTE', title: 'Competitor analysis', description: 'Noted that Gaurav Singh is also evaluating competitor products.' },
    { type: 'EMAIL', title: 'Case study shared', description: 'Shared relevant case studies with Shruti Bose for the travel portal project.' },
  ];

  const activities = [];
  for (let i = 0; i < activityData.length; i++) {
    const data = activityData[i];
    const leadIndex = i % leads.length;
    const userIndex = i % 3;
    const users = [admin, rahul, priya];

    // Spread activity dates
    const daysAgo = Math.floor(Math.random() * 30);
    const createdAt = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);

    const activity = await prisma.activity.create({
      data: {
        leadId: leads[leadIndex].id,
        userId: users[userIndex].id,
        type: data.type,
        title: data.title,
        description: data.description,
        createdAt,
      },
    });
    activities.push(activity);
  }

  console.log(`✅ Created ${activities.length} activities`);

  // 6. Create Default Company Settings
  await prisma.companySettings.create({
    data: {
      companyName: 'TIVRA',
      companyEmail: 'info@tivra.com',
      companyPhone: '+91 1800 123 4567',
      companyAddress: 'Tower A, Level 12, Cyber City, Gurgaon 122002',
      companyWebsite: 'https://tivra.com',
      timezone: 'Asia/Kolkata',
      dateFormat: 'DD/MM/YYYY',
      currency: 'INR',
    },
  });

  console.log('✅ Created company settings');

  console.log('\n🎉 Seed completed successfully!');
  console.log('\n📋 Login Credentials:');
  console.log('   Admin: admin@tivra.com / admin123');
  console.log('   Sales: rahul@tivra.com / sales123');
  console.log('   Sales: priya@tivra.com / sales123\n');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seed failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
